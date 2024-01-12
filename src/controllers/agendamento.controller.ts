import { Request, Response } from "express";
import { Agendamento } from "../models/Agendamento";
import agendamentoRepository from "../repositories/agendamento.repository";

export default class AgendamentoController {

  async create(req: Request, res: Response) {
      if (!req.body.id) {
          res.status(400).send({
              message: "Não pode ser vazio o agendamento!"
          });
          return;
      }
      try {
          const agendamento : Agendamento = req.body;
          const savedAgendamento = await agendamentoRepository.save(agendamento);
          res.status(201).send(savedAgendamento);
      } catch (err) {
          res.status(500).send({
              message: "Erro ao tentar salvar um agendamento."
          });
      }
  }

  async findAll(req: Request, res: Response) {
      try {
          const agendamentos = await agendamentoRepository.retrieveAll();
          res.status(200).send(agendamentos);
      } catch (err) {
          res.status(500).send({
              message: "Erro encontrado quando estava se fazendo a busca por todos os agendamentos."
          });
      }
  }

  async findOne(req: Request, res: Response) {
      const id: number = parseInt(req.params.id);
      try {
          const agendamento = await agendamentoRepository.retrieveById(id);
          if (agendamento) res.status(200).send(agendamento);
          else
              res.status(404).send({
                  message: `Não foi encontrado nenhum agendamento com esse id=${id}.`
              });
      } catch (err) {
          res.status(500).send({
              message: `Error não foi possível retornar o agendamento com id=${id}.`
          });
      }
  }

  async update(req: Request, res: Response) {
      let agendamento: Agendamento = req.body;
      agendamento.idAgendamento = parseInt(req.params.id);
      try {
          const num = await agendamentoRepository.update(agendamento);
          if (num == 1) {
              res.send({
                  message: "Agendamento foi atualizado com sucesso."
              });
          } else {
              res.send({
                  message: `Não foi possível ataulizar o agendamento com o id=${agendamento.idAgendamento}. O agendamento não foi encontrado, ou ele está vazio!`
              });
          }
      } catch (err) {
          res.status(500).send({
              message: `Error ao atualizar o agendamento com id=${agendamento.idAgendamento}.`
          });
      }
  }

  async delete(req: Request, res: Response) {
      const id: number = parseInt(req.params.id);
      try {
          const num = await agendamentoRepository.delete(id);
          if (num == 1) {
              res.send({
                  message: "agendamento deletado com sucesso!"
              });
          } else {
              res.send({
                  message: `Não foi possível deletar o agendamento com id=${id}. Talvez o agendamento não tenha sido encontrado.`,
              });
          }
      } catch (err) {
          res.status(500).send({
              message: `O agendamento com id==${id}, não pode ser deletado.`
          });
      }
  }

  async deleteAll(req: Request, res: Response) {
      try {
          const num = await agendamentoRepository.deleteAll();
          res.send({ message: `${num} agendamento foram deletados com sucesso!` });
      } catch (err) {
          res.status(500).send({
              message: "Algum erro ocorreu enquato deletava todos os agendamento."
          });
      }
  }

}
