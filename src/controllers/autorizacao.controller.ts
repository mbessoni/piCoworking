import { Request, Response } from "express";
import { Autorizacao } from "../models/autorizacao";
import autorizacaoRepository from "../repositories/autorizacao.repository";

export default class AutorizacaoController {

  async create(req: Request, res: Response) {
      if (!req.body.id) {
          res.status(400).send({
              message: "Não pode ser vazio o autorizacao!"
          });
          return;
      }
      try {
          const autorizacao : Autorizacao = req.body;
          const savedAutorizacao = await autorizacaoRepository.save(autorizacao);
          res.status(201).send(savedAutorizacao);
      } catch (err) {
          res.status(500).send({
              message: "Erro ao tentar salvar um autorizacao."
          });
      }
  }

  async findAll(req: Request, res: Response) {
      try {
          const autorizacao = await autorizacaoRepository.retrieveAll();
          res.status(200).send(autorizacao);
      } catch (err) {
          res.status(500).send({
              message: "Erro encontrado quando estava se fazendo a busca por todos os autorizacaos."
          });
      }
  }

  async findOne(req: Request, res: Response) {
      const id: number = parseInt(req.params.id);
      try {
          const autorizacao = await autorizacaoRepository.retrieveById(id);
          if (autorizacao) res.status(200).send(autorizacao);
          else
              res.status(404).send({
                  message: `Não foi encontrado nenhum autorizacao com esse id=${id}.`
              });
      } catch (err) {
          res.status(500).send({
              message: `Error não foi possível retornar o autorizacao com id=${id}.`
          });
      }
  }

  async update(req: Request, res: Response) {
      let autorizacao: Autorizacao = req.body;
      autorizacao.idAutorizacao = parseInt(req.params.id);
      try {
          const num = await autorizacaoRepository.update(autorizacao);
          if (num == 1) {
              res.send({
                  message: "Autorizacao foi atualizado com sucesso."
              });
          } else {
              res.send({
                  message: `Não foi possível ataulizar o autorizacao com o id=${autorizacao.idAutorizacao}. O autorizacao não foi encontrado, ou ele está vazio!`
              });
          }
      } catch (err) {
          res.status(500).send({
              message: `Error ao atualizar o autorizacao com id=${autorizacao.idAutorizacao}.`
          });
      }
  }

  async delete(req: Request, res: Response) {
      const id: number = parseInt(req.params.id);
      try {
          const num = await autorizacaoRepository.delete(id);
          if (num == 1) {
              res.send({
                  message: "autorizacao deletado com sucesso!"
              });
          } else {
              res.send({
                  message: `Não foi possível deletar o autorizacao com id=${id}. Talvez o autorizacao não tenha sido encontrado.`,
              });
          }
      } catch (err) {
          res.status(500).send({
              message: `O autorizacao com id==${id}, não pode ser deletado.`
          });
      }
  }

  async deleteAll(req: Request, res: Response) {
      try {
          const num = await autorizacaoRepository.deleteAll();
          res.send({ message: `${num} autorizacao foram deletados com sucesso!` });
      } catch (err) {
          res.status(500).send({
              message: "Algum erro ocorreu enquato deletava todos os autorizacao."
          });
      }
  }

}
