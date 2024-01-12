import { Request, Response } from "express";
import { Email } from "../models/Email";
import emailRepository from "../repositories/email.repository";

export default class EmailController {

    async create(req: Request, res: Response) {
        if (!req.body.nEmail) {
            res.status(400).send({
                message: "Não pode ser vazio o Email!"
            });
            return;
        }
        try {
            const email : Email = req.body;
            const savedEmail = await emailRepository.save(email);
            res.status(201).send(savedEmail);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar um Email."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const emails = await emailRepository.retrieveAll();
            res.status(200).send(emails);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os Emails."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const email = await emailRepository.retrieveById(id);
            if (email) res.status(200).send(email);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum Email com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o Email com id=${id}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let email: Email = req.body;
        email.idEmail = parseInt(req.params.id);
        try {
            const num = await emailRepository.update(email);
            if (num == 1) {
                res.send({
                    message: "Email foi atualizado com sucesso."
                });
            } else {
                res.send({
                    message: `Não foi possível ataulizar o Email com o id=${email.idEmail}. O Email não foi encontrado, ou ele está vazio!`
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar o Email com id=${email.idEmail}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const num = await emailRepository.delete(id);
            if (num == 1) {
                res.send({
                    message: "Email deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o Email com id=${id}. Talvez o Email não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O Email com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await emailRepository.deleteAll();
            res.send({ message: `${num} Email foram deletados com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos os Email."
            });
        }
    }

}
