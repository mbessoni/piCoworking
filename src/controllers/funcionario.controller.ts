import { Request, Response } from "express";
import { Funcionario } from "../models/funcionario";
import funcionarioRepository from "../repositories/funcionario.repository";
import { Telefone } from "../models/Telefone";
import { Email } from "../models/Email";
import telefoneRepository from "../repositories/telefone.repository";
import emailRepository from "../repositories/email.repository";

export default class FuncionarioController {
  
  async create(req: Request, res: Response) {
    if (!req.body.nome) {
        res.status(400).send({
            message: "Não pode ser vazio o funcionario!"
        });
        return;
    }
    try {
      const funcionario: Funcionario = req.body;
      let email: string |  null = null;
      if (email !== null) {
        funcionario.email = email;
      }
      /*let emailSgd: string | null 
      if (emailSgd !== null) {
        funcionario.email = emailSgd;
      }
      */
      let telefone1: string |  null = null;
      if (telefone1 !== null) {
        funcionario.telefones = telefone1;
      }
      let telefone2: string |  null = null;
      if (telefone2 !== null) {
        funcionario.telefones = telefone2;
      }
      const savedfuncionario = await funcionarioRepository.save(funcionario);
      res.status(201).send(savedfuncionario);
  } catch (err) {
      res.status(500).send({
          message: "Erro ao tentar salvar um funcionario."
      });
  }
}

async findAll(req: Request, res: Response) {
  try {
      const funcionarios = await funcionarioRepository.retrieveAll();
      res.status(200).send(funcionarios);
  } catch (err) {
      res.status(500).send({
          message: "Erro encontrado quando estava se fazendo a busca por todos os funcionarios."
      });
  }
}

async findOne(req: Request, res: Response) {
  const cpf: number = parseInt(req.params.cpf);
  try {
      const funcionario = await funcionarioRepository.retrieveById(cpf);
      if (funcionario) res.status(200).send(funcionario);
      else
          res.status(404).send({
              message: `Não foi encontrado nenhum funcionario com esse id=${cpf}.`
          });
  } catch (err) {
      res.status(500).send({
          message: `Error não foi possível retornar o funcionario com id=${cpf}.`
      });
  }
}

async update(req: Request, res: Response) {
  let funcionario: Funcionario = req.body;
  try {
      const num = await funcionarioRepository.update(funcionario);
      if (num == 1) {
          res.send({
              message: "funcionario foi atualizado com sucesso."
          });
      } else {
          res.send({
              message: `Não foi possível ataulizar o funcionario com o id=${funcionario.cpf}. O funcionario não foi encontrado, ou ele está vazio!`
          });
      }
  } catch (err) {
      res.status(500).send({
          message: `Error ao atualizar o funcionario com id=${funcionario.cpf}.`
      });
  }
}

async delete(req: Request, res: Response) {
  const cpf: Number = parseInt(req.params.cpf);
  try {
      const num = await funcionarioRepository.delete(cpf);
      if (num == 1) {
          res.send({
              message: "funcionario deletado com sucesso!"
          });
      } else {
          res.send({
              message: `Não foi possível deletar o funcionario com cpf=${cpf}. Talvez o funcionario não tenha sido encontrado.`,
          });
      }
  } catch (err) {
      res.status(500).send({
          message: `O funcionario com cpf==${cpf}, não pode ser deletado.`
      });
  }
}

async deleteAll(req: Request, res: Response) {
  try {
      const num = await funcionarioRepository.deleteAll();
      res.send({ message: `${num} funcionarios foram deletados com sucesso!` });
  } catch (err) {
      res.status(500).send({
          message: "Algum erro ocorreu enquato deletava todos os funcionarios."
      });
  }
}

}
