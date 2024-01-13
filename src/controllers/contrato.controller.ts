import { Request, Response } from "express";
import { Contrato } from "../models/contrato";
import contratoRepository from "../repositories/contrato.repository";

export default class ContratoController {

  async create(req: Request, res: Response) {
      if (!req.body) {
          res.status(400).send({
              message: "Não pode ser vazio o Contrato!"
          });
          return;
      }
      try {
          const contrato : Contrato = req.body;
          const savedContrato = await contratoRepository.save(contrato);
          res.status(201).send(savedContrato);
      } catch (err) {
          res.status(500).send({
              message: "Erro ao tentar salvar um Contrato."
          });
      }
  }

  async findAll(req: Request, res: Response) {
      try {
          const contratos = await contratoRepository.retrieveAll();
          res.status(200).send(contratos);
      } catch (err) {
          res.status(500).send({
              message: "Erro encontrado quando estava se fazendo a busca por todos os Contratos."
          });
      }
  }

  async findOne(req: Request, res: Response) {
      const id: number = parseInt(req.params.id);
      try {
          const contrato = await contratoRepository.retrieveById(id);
          if (contrato) res.status(200).send(contrato);
          else
              res.status(404).send({
                  message: `Não foi encontrado nenhum Contrato com esse id=${id}.`
              });
      } catch (err) {
          res.status(500).send({
              message: `Error não foi possível retornar o Contrato com id=${id}.`
          });
      }
  }

  async update(req: Request, res: Response) {
      let contrato: Contrato = req.body;
      contrato.idContrato = parseInt(req.params.id);
      try {
          const num = await contratoRepository.update(contrato);
          if (num == 1) {
              res.send({
                  message: "Contrato foi atualizado com sucesso."
              });
          } else {
              res.send({
                  message: `Não foi possível ataulizar o Contrato com o id=${contrato.idContrato}. O Contrato não foi encontrado, ou ele está vazio!`
              });
          }
      } catch (err) {
          res.status(500).send({
              message: `Error ao atualizar o Contrato com id=${contrato.idContrato}.`
          });
      }
  }

  async delete(req: Request, res: Response) {
      const id: number = parseInt(req.params.id);
      try {
          const num = await contratoRepository.delete(id);
          if (num == 1) {
              res.send({
                  message: "Contrato deletado com sucesso!"
              });
          } else {
              res.send({
                  message: `Não foi possível deletar o Contrato com id=${id}. Talvez o Contrato não tenha sido encontrado.`,
              });
          }
      } catch (err) {
          res.status(500).send({
              message: `O Contrato com id==${id}, não pode ser deletado.`
          });
      }
  }

  /* async deleteAll(req: Request, res: Response) {
      try {
          const num = await contratoRepository.deleteAll();
          res.send({ message: `${num} Contrato foram deletados com sucesso!` });
      } catch (err) {
          res.status(500).send({
              message: "Algum erro ocorreu enquato deletava todos os Contrato."
          });
      }
  } */

}
