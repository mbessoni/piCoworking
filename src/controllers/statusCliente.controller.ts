import { Request, Response } from "express";
import { StatusCliente } from "../models/statusCliente";
import statusClienteRepository from "../repositories/statusCliente.repository";

export default class StatusClienteController {

    async create(req: Request, res: Response) {
        if (!req.body) {
            res.status(400).send({                
                message: "Não pode ser vazio o StatusCliente!"
            });
            return;
        }
        try {
            const status : StatusCliente = req.body;
            const savedStatusCliente = await statusClienteRepository.save(status);
            res.status(201).send(savedStatusCliente);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar um StatusCliente."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const statuses = await statusClienteRepository.retrieveAll();
            res.status(200).send(statuses);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os StatusCliente."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const status = await statusClienteRepository.retrieveById(id);
            if (status) res.status(200).send(status);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum StatusCliente com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o StatusCliente com id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let status: StatusCliente = req.body;
        status.idStatusCliente = parseInt(req.params.id);
        try {
            const num = await statusClienteRepository.update(status);
            if (num == 1) {
                res.send({
                    message: "StatusCliente foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível ataulizar o StatusCliente com o id=${status.idStatusCliente}. O StatusCliente não foi encontrado, ou ele está vazio!`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar o StatusCliente com id=${status.idStatusCliente}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const num = await statusClienteRepository.delete(id);
            if (num == 1) {
                res.send({
                    message: "StatusCliente deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o StatusCliente com id=${id}. Talvez o statusCliente não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O StatusCliente com id==${id}, não pode ser deletado.`
            });
        }
    }

}
