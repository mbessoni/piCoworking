import { Request, Response } from "express";
import { Endereco } from "../models/Endereco";
import enderecoRepository from "../repositories/endereco.repository";

export default class EnderecoController {

  async create(req: Request, res: Response) {
      if (!req.body.uf) {
          res.status(400).send({
              message: "Não pode ser vazio o Endereco!"
          });
          return;
      }
      try {
          const endereco : Endereco = req.body;
          const savedEndereco = await enderecoRepository.save(endereco);
          res.status(201).send(savedEndereco);
      } catch (err) {
          res.status(500).send({
              message: "Erro ao tentar salvar um Endereco."
          });
      }
  }

  async findAll(req: Request, res: Response) {
      try {
          const enderecos = await enderecoRepository.retrieveAll();
          res.status(200).send(enderecos);
      } catch (err) {
          res.status(500).send({
              message: "Erro encontrado quando estava se fazendo a busca por todos os Enderecos."
          });
      }
  }

  async findOne(req: Request, res: Response) {
      const id: number = parseInt(req.params.id);
      try {
          const endereco = await enderecoRepository.retrieveById(id);
          if (endereco) res.status(200).send(endereco);
          else
              res.status(404).send({
                  message: `Não foi encontrado nenhum Endereco com esse id=${id}.`
              });
      } catch (err) {
          res.status(500).send({
              message: `Error não foi possível retornar o Endereco com id=${id}.`
          });
      }
  }

  async update(req: Request, res: Response) {
      let endereco: Endereco = req.body;
      endereco.IdEndereco = parseInt(req.params.id);
      try {
          const num = await enderecoRepository.update(endereco);
          if (num == 1) {
              res.send({
                  message: "Endereco foi atualizado com sucesso."
              });
          } else {
              res.send({
                  message: `Não foi possível ataulizar o Endereco com o id=${endereco.IdEndereco}. O Endereco não foi encontrado, ou ele está vazio!`
              });
          }
      } catch (err) {
          res.status(500).send({
              message: `Error ao atualizar o Endereco com id=${endereco.IdEndereco}.`
          });
      }
  }

  async delete(req: Request, res: Response) {
      const id: number = parseInt(req.params.id);
      try {
          const num = await enderecoRepository.delete(id);
          if (num == 1) {
              res.send({
                  message: "Endereco deletado com sucesso!"
              });
          } else {
              res.send({
                  message: `Não foi possível deletar o Endereco com id=${id}. Talvez o Endereco não tenha sido encontrado.`,
              });
          }
      } catch (err) {
          res.status(500).send({
              message: `O Endereco com id==${id}, não pode ser deletado.`
          });
      }
  }

  async deleteAll(req: Request, res: Response) {
      try {
          const num = await enderecoRepository.deleteAll();
          res.send({ message: `${num} Endereco foram deletados com sucesso!` });
      } catch (err) {
          res.status(500).send({
              message: "Algum erro ocorreu enquato deletava todos os Endereco."
          });
      }
  }

}
