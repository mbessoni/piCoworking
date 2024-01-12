import { Request, Response } from "express";
import { StatusSala } from "../models/statusSala";  // Certifique-se de importar a classe correta StatusSala
import statusSalaRepository from "../repositories/statusSala.repository";  // Certifique-se de importar o repositório correto

export default class StatusSalaController {

    async create(req: Request, res: Response) {
        if (!req.body.statusSala) {
            res.status(400).send({
                message: "Não pode ser vazio o StatusSala!"
            });
            return;
        }
        try {
            const status : StatusSala = req.body;
            const savedStatusSala = await statusSalaRepository.save(status);
            res.status(201).send(savedStatusSala);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar um StatusSala."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const statuses = await statusSalaRepository.retrieveAll();
            res.status(200).send(statuses);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os StatusSala."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const status = await statusSalaRepository.retrieveById(id);
            if (status) res.status(200).send(status);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum StatusSala com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o StatusSala com id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let status: StatusSala = req.body;
        status.idStatus = parseInt(req.params.id);
        try {
            const num = await statusSalaRepository.update(status);
            if (num == 1) {
                res.send({
                    message: "StatusSala foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível ataulizar o StatusSala com o id=${status.idStatus}. O StatusSala não foi encontrado, ou ele está vazio!`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar o StatusSala com id=${status.idStatus}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const num = await statusSalaRepository.delete(id);
            if (num == 1) {
                res.send({
                    message: "StatusSala deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o StatusSala com id=${id}. Talvez o statusSala não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O StatusSala com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await statusSalaRepository.deleteAll();
            res.send({ message: `${num} StatusSala foram deletados com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos os StatusSala."
            });
        }
    }

}