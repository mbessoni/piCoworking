import { Request, Response } from "express";
import { Telefone } from "../models/telefone";
import telefoneRepository from "../repositories/telefone.repository";



export default class TelefoneController {

    async create(req: Request, res: Response) {
        if (!req.body) {
            res.status(400).send({
                message: "Não pode ser vazio o Telefone!"
            });
            return;
        }
        try {
            const telefone: Telefone = req.body;
            const savedTelefone = await telefoneRepository.save(telefone);
            res.status(201).send(savedTelefone);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar um Telefone."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const telefones = await telefoneRepository.retrieveAll();
            res.status(200).send(telefones);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os Telefones."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const telefone = await telefoneRepository.retrieveById(id);
            if (telefone) res.status(200).send(telefone);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum Telefone com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o Telefone com id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let telefone: Telefone = req.body;
        telefone.idTelefone = parseInt(req.params.id);
        try {
            const num = await telefoneRepository.update(telefone);
            if (num == 1) {
                res.send({
                    message: "Telefone foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível ataulizar o Telefone com o id=${telefone.idTelefone}. O Telefone não foi encontrado, ou ele está vazio!`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar o Telefone com id=${telefone.idTelefone}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const num = await telefoneRepository.delete(id);
            if (num == 1) {
                res.send({
                    message: "Telefone deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o Telefone com id=${id}. Talvez o Telefone não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O Telefone com id==${id}, não pode ser deletado.`
            });
        }
    }

    /* async deleteAll(req: Request, res: Response) {
        try {
            const num = await telefoneRepository.deleteAll();
            res.send({ message: `${num} Telefone foram deletados com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos os Telefone."
            });
        }
    } */

}


