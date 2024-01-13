import { Request, Response } from "express";
import { ClientePJ } from "../models/clientePJ";
import { Email } from "../models/email";
import { Telefone } from "../models/telefone";
import clientePJRepository from "../repositories/clientePJ.repository";
import telefoneRepository from "../repositories/telefone.repository";
import emailRepository from "../repositories/email.repository";


export default class ClientePJController {
  
  async create(req: Request, res: Response) {
    if (!req.body.nome) {
        res.status(400).send({
            message: "Não pode ser vazio o ClientePJ!"
        });
        return;
    }
    try {
      const clientePJ: ClientePJ = req.body;
      let email: string | null = null
      if (email !== null) {
        clientePJ.email = email;
      }
      /*
      let emailSgd: string | null 
      if (emailSgd !== null) {
        clientePJ.cliente.email = emailSgd;
      }
      */
      let telefone1: string | null = null;
      if (telefone1 !== null) {
        clientePJ.telefone = telefone1;
      }
      let telefone2: string |  null = null;
      if (telefone2 !== null) {
        clientePJ.telefone = telefone2;
      }
      const savedclientePJ = await clientePJRepository.save(clientePJ);
      res.status(201).send(savedclientePJ);
  } catch (err) {
      res.status(500).send({
          message: "Erro ao tentar salvar um ClientePJ."
      });
  }
}

async findAll(req: Request, res: Response) {
  try {
      const clientesPJ = await clientePJRepository.retrieveAll();
      res.status(200).send(clientesPJ);
  } catch (err) {
      res.status(500).send({
          message: "Erro encontrado quando estava se fazendo a busca por todos os ClientesPJ."
      });
  }
}

async findOne(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  try {
      const clientePJ = await clientePJRepository.retrieveById(id);
      if (clientePJ) res.status(200).send(clientePJ);
      else
          res.status(404).send({
              message: `Não foi encontrado nenhum ClientePJ com esse id=${id}.`
          });
  } catch (err) {
      res.status(500).send({
          message: `Error não foi possível retornar o ClientePJ com id=${id}.`
      });
  }
}

async update(req: Request, res: Response) {
  let clientePJ: ClientePJ = req.body;
  clientePJ.cnpj = parseInt(req.params.cnpj);
  try {
      const num = await clientePJRepository.update(clientePJ);
      if (num == 1) {
          res.send({
              message: "ClientePJ foi atualizado com sucesso."
          });
      } else {
          res.send({
              message: `Não foi possível ataulizar o ClientePJ com o id=${clientePJ.cnpj}. O ClientePJ não foi encontrado, ou ele está vazio!`
          });
      }
  } catch (err) {
      res.status(500).send({
          message: `Error ao atualizar o ClientePJ com id=${clientePJ.cnpj}.`
      });
  }
}

async delete(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  try {
      const num = await clientePJRepository.delete(id);
      if (num == 1) {
          res.send({
              message: "ClientePJ deletado com sucesso!"
          });
      } else {
          res.send({
              message: `Não foi possível deletar o ClientePJ com id=${id}. Talvez o ClientePJ não tenha sido encontrado.`,
          });
      }
  } catch (err) {
      res.status(500).send({
          message: `O ClientePJ com id==${id}, não pode ser deletado.`
      });
  }
}

async deleteAll(req: Request, res: Response) {
  try {
      const num = await clientePJRepository.deleteAll();
      res.send({ message: `${num} ClientesPJ foram deletados com sucesso!` });
  } catch (err) {
      res.status(500).send({
          message: "Algum erro ocorreu enquato deletava todos os ClientesPJ."
      });
  }
}

}