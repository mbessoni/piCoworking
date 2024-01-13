"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const email_repository_1 = __importDefault(require("../repositories/email.repository"));
class EmailController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.nEmail) {
                res.status(400).send({
                    message: "Não pode ser vazio o Email!"
                });
                return;
            }
            try {
                const email = req.body;
                const savedEmail = yield email_repository_1.default.save(email);
                res.status(201).send(savedEmail);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um Email."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const emails = yield email_repository_1.default.retrieveAll();
                res.status(200).send(emails);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os Emails."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const email = yield email_repository_1.default.retrieveById(id);
                if (email)
                    res.status(200).send(email);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum Email com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o Email com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let email = req.body;
            email.idEmail = parseInt(req.params.id);
            try {
                const num = yield email_repository_1.default.update(email);
                if (num == 1) {
                    res.send({
                        message: "Email foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o Email com o id=${email.idEmail}. O Email não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o Email com id=${email.idEmail}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield email_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "Email deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o Email com id=${id}. Talvez o Email não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O Email com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield email_repository_1.default.deleteAll();
                res.send({ message: `${num} Email foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os Email."
                });
            }
        });
    }
}
exports.default = EmailController;
//# sourceMappingURL=email.controller.js.map