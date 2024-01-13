import { Request, Response } from "express";
import { Login } from "../models/login";
import loginRepository from "../repositories/login.repository";

export default class LoginController {

  async create(req: Request, res: Response) {
      if (!req.body) {
          res.status(400).send({
              message: "Não pode ser vazio o login!"
          });
          return;
      }
      try {
          const login : Login = req.body;
          const savedLogin = await loginRepository.save(login);
          res.status(201).send(savedLogin);
      } catch (err) {
          res.status(500).send({
              message: "Erro ao tentar salvar um login."
          });
      }
  }

  async findAll(req: Request, res: Response) {
      try {
          const logins = await loginRepository.retrieveAll();
          res.status(200).send(logins);
      } catch (err) {
          res.status(500).send({
              message: "Erro encontrado quando estava se fazendo a busca por todos os logins."
          });
      }
  }

  async findOne(req: Request, res: Response) {
      const id: number = parseInt(req.params.id);
      try {
          const login = await loginRepository.retrieveById(id);
          if (login) res.status(200).send(login);
          else
              res.status(404).send({
                  message: `Não foi encontrado nenhum login com esse id=${id}.`
              });
      } catch (err) {
          res.status(500).send({
              message: `Error não foi possível retornar o login com id=${id}.`
          });
      }
  }

  async update(req: Request, res: Response) {
      let login: Login = req.body;
      login.id = parseInt(req.params.id);
      try {
          const num = await loginRepository.update(login);
          if (num == 1) {
              res.send({
                  message: "login foi atualizado com sucesso."
              });
          } else {
              res.send({
                  message: `Não foi possível ataulizar o login com o id=${login.id}. O login não foi encontrado, ou ele está vazio!`
              });
          }
      } catch (err) {
          res.status(500).send({
              message: `Error ao atualizar o login com id=${login.id}.`
          });
      }
  }

  async delete(req: Request, res: Response) {
      const id: number = parseInt(req.params.id);
      try {
          const num = await loginRepository.delete(id);
          if (num == 1) {
              res.send({
                  message: "login deletado com sucesso!"
              });
          } else {
              res.send({
                  message: `Não foi possível deletar o login com id=${id}. Talvez o login não tenha sido encontrado.`,
              });
          }
      } catch (err) {
          res.status(500).send({
              message: `O login com id==${id}, não pode ser deletado.`
          });
      }
  }

  /* async deleteAll(req: Request, res: Response) {
      try {
          const num = await loginRepository.deleteAll();
          res.send({ message: `${num} login foram deletados com sucesso!` });
      } catch (err) {
          res.status(500).send({
              message: "Algum erro ocorreu enquato deletava todos os login."
          });
      }
  } */

}