import { Request, Response } from "express";
import { Salas } from "../models/Salas";
import salasRepository from "../repositories/salas.repository";



export default class SalaController {

    async create(req: Request, res: Response) {
        if (!req.body.nome) {
            res.status(400).send({
                message: "Não pode ser vazio a sala!"
            });
            return;
        }

        try {
            const salas: Salas = req.body;
            const savedSalas = await salasRepository.save(salas);

            res.status(201).send(savedSalas);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar uma sala."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const sala = await salasRepository.retrieveAll();

            res.status(200).send(sala);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos as salas."
            });
        }
    }
    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const sala = await salasRepository.retrieveById(id);
            if (sala) res.status(200).send(sala);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhuma sala com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar a Sala com id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let sala: Salas = req.body;
        sala.idSala = parseInt(req.params.id);

        try {
            const num = await salasRepository.update(sala);

            if (num == 1) {
                res.send({
                    message: "Sala foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível atualizar a Sala com o id=${sala.idSala}. A Sala não foi encontrada, ou ela está vazio!`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar a Sala com id=${sala.idSala}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const num = await salasRepository.delete(id);

            if (num == 1) {
                res.send({
                    message: "Sala deletada com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar a Sala com id=${id}. Talvez a Sala não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `A Sala com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await salasRepository.deleteAll();

            res.send({ message: `${num} Salas foram deletados com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos as salas."
            });
        }
    }

}

