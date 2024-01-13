import { Request, Response } from "express";
import { Testemunha } from "../models/testemunha";
import testemunhaRepository from "../repositories/testemunha.repository";

export default class TestemunhaController {

    async create(req: Request, res: Response) {
        if (!req.body) {
            res.status(400).send({
                message: "Não pode ser vazio o Testemunha!"
            });
            return;
        }
        try {
            const testemunha : Testemunha = req.body;
            const savedTestemunha = await testemunhaRepository.save(testemunha);
            res.status(201).send(savedTestemunha);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar um Testemunha."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const testemunhas = await testemunhaRepository.retrieveAll();
            res.status(200).send(testemunhas);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os Testemunhas."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const testemunha = await testemunhaRepository.retrieveById(id);
            if (testemunha) res.status(200).send(testemunha);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum Testemunha com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o Testemunha com id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let testemunha: Testemunha = req.body;
        testemunha.idTestemunha = parseInt(req.params.id);
        try {
            const num = await testemunhaRepository.update(testemunha);
            if (num == 1) {
                res.send({
                    message: "Testemunha foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível ataulizar o Testemunha com o id=${testemunha.idTestemunha}. O Testemunha não foi encontrado, ou ele está vazio!`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar o Testemunha com id=${testemunha.idTestemunha}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const num = await testemunhaRepository.delete(id);
            if (num == 1) {
                res.send({
                    message: "Testemunha deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o Testemunha com id=${id}. Talvez o Testemunha não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O Testemunha com id==${id}, não pode ser deletado.`
            });
        }
    }

    /* async deleteAll(req: Request, res: Response) {
        try {
            const num = await testemunhaRepository.deleteAll();
            res.send({ message: `${num} Testemunha foram deletados com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos os Testemunha."
            });
        }
    }
 */
}
