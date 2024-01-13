import { Request, Response } from "express";
import { TipoSalas } from "../models/TipoSalas";
import TiposSalasRepository from "../repositories/tiposSala.repository";

export default class TiposSalasController {

    async create(req: Request, res: Response) {
        if (!req.body) {
            res.status(400).send({
                message: "Não pode ser vazio a tiposSalas!"
            });
            return;
        }

        try {
            const tiposSalas: TipoSalas = req.body;
            const savedtiposSalas = await TiposSalasRepository.save(tiposSalas);

            res.status(201).send(savedtiposSalas);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar um tipo de sala."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const sala = await TiposSalasRepository.retrieveAll();

            res.status(200).send(sala);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os TiposSalas."
            });
        }
    }
    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const sala = await TiposSalasRepository.retrieveById(id);
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
        let sala: TipoSalas = req.body;
        sala.idTipoSalas = parseInt(req.params.id);

        try {
            const num = await TiposSalasRepository.update(sala);

            if (num == 1) {
                res.send({
                    message: "Sala foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível atualizar a Sala com o id=${sala.idTipoSalas}. A Sala não foi encontrada, ou ela está vazio!`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar a Sala com id=${sala.idTipoSalas}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const num = await TiposSalasRepository.delete(id);

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

    /* async deleteAll(req: Request, res: Response) {
        try {
            const num = await TiposSalasRepository.deleteAll();

            res.send({ message: `${num} TiposSalas foram deletados com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos as TiposSalas."
            });
        }
    }
 */
}
