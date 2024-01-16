import { Request, Response } from "express";
import { Cliente } from "../models/cliente";
import { Telefone } from "../models/telefone";
import { Email } from "../models/email";
import clienteRepository from "../repositories/cliente.repository";
import telefoneRepository from "../repositories/telefone.repository";
import emailRepository from "../repositories/email.repository";

export default class ClienteController {
  
  async create(req: Request, res: Response) {
    if (!req.body) {
        res.status(400).send({
            message: "Não pode ser vazio o Cliente!"
        });
        return;
    }
    /*
    try {
      const cliente: Cliente = req.body;
      let emailPrc: string | null
      if (emailPrc !== null) {
        cliente.email = emailPrc;
      }
      let emailSgd: string | null 
      if (emailSgd !== null) {
        cliente.email = emailSgd;
      }
      let telefonePrc: string | null 
      if (telefonePrc !== null) {
        cliente.telefone = telefonePrc;
      }
      let telefoneSgd: string | null 
      if (telefoneSgd !== null) {
        cliente.telefone = telefoneSgd;
      }
      */

      /* try {
        const cliente: Cliente = req.body;
  
        // Correção na validação de email e telefone
        if (req.body.emailPrc !== undefined) {
          cliente.email = req.body.emailPrc;
        }
        if (req.body.emailSgd !== undefined) {
          cliente.email = req.body.emailSgd;
        }
        if (req.body.telefonePrc !== undefined) {
          cliente.telefone = req.body.telefonePrc;
        }
        if (req.body.telefoneSgd !== undefined) {
          cliente.telefone = req.body.telefoneSgd;
        } */

        try {
          const cliente: Cliente = req.body;
    
          // Correção na validação de email e telefone
          if (req.body.email !== undefined) {
            cliente.email = req.body.email;
          }
          
          if (req.body.telefone !== undefined) {
            cliente.telefone = req.body.telefone;
          }
          

      const savedcliente = await clienteRepository.save(cliente);
      res.status(201).send(savedcliente);
  } catch (err) {
      res.status(500).send({
          message: "Erro ao tentar salvar um cliente."
      });
  }
}

async findAll(req: Request, res: Response) {
  try {
      const clientes = await clienteRepository.retrieveAll();
      res.status(200).send(clientes);
  } catch (err) {
      res.status(500).send({
          message: "Erro encontrado quando estava se fazendo a busca por todos os clientes."
      });
  }
}

async findOne(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  try {
      const cliente = await clienteRepository.retrieveById(id);
      if (cliente) res.status(200).send(cliente);
      else
          res.status(404).send({
              message: `Não foi encontrado nenhum cliente com esse id=${id}.`
          });
  } catch (err) {
      res.status(500).send({
          message: `Error não foi possível retornar o Cliente com id=${id}.`
      });
  }
}

async update(req: Request, res: Response) {
  let cliente: Cliente = req.body;
  cliente.idCliente = parseInt(req.params.id);
  try {
      const num = await clienteRepository.update(cliente);
      if (num == 1) {
          res.send({
              message: "cliente foi atualizado com sucesso."
          });
      } else {
          res.send({
              message: `Não foi possível ataulizar o Cliente com o id=${cliente.idCliente}. O Cliente não foi encontrado, ou ele está vazio!`
          });
      }
  } catch (err) {
      res.status(500).send({
          message: `Error ao atualizar o Cliente com id=${cliente.idCliente}.`
      });
  }
}

async delete(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  try {
      const num = await clienteRepository.delete(id);
      if (num == 1) {
          res.send({
              message: "Cliente deletado com sucesso!"
          });
      } else {
          res.send({
              message: `Não foi possível deletar o Cliente com id=${id}. Talvez o Cliente não tenha sido encontrado.`,
          });
      }
  } catch (err) {
      res.status(500).send({
          message: `O Cliente com id==${id}, não pode ser deletado.`
      });
  }
}

/* async deleteAll(req: Request, res: Response) {
  try {
      const num = await clienteRepository.deleteAll();
      res.send({ message: `${num} Clientes foram deletados com sucesso!` });
  } catch (err) {
      res.status(500).send({
          message: "Algum erro ocorreu enquato deletava todos os clientes."
      });
  }
} */

}


