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
const login_repository_1 = __importDefault(require("../repositories/login.repository"));
class LoginController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.user) {
                res.status(400).send({
                    message: "Não pode ser vazio o login!"
                });
                return;
            }
            try {
                const login = req.body;
                const savedLogin = yield login_repository_1.default.save(login);
                res.status(201).send(savedLogin);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um login."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const logins = yield login_repository_1.default.retrieveAll();
                res.status(200).send(logins);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os logins."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const login = yield login_repository_1.default.retrieveById(id);
                if (login)
                    res.status(200).send(login);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum login com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o login com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let login = req.body;
            login.id = parseInt(req.params.id);
            try {
                const num = yield login_repository_1.default.update(login);
                if (num == 1) {
                    res.send({
                        message: "login foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o login com o id=${login.id}. O login não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o login com id=${login.id}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield login_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "login deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o login com id=${id}. Talvez o login não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O login com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield login_repository_1.default.deleteAll();
                res.send({ message: `${num} login foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os login."
                });
            }
        });
    }
}
exports.default = LoginController;
//# sourceMappingURL=login.controller.js.map