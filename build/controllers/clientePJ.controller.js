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
const clientePJ_repository_1 = __importDefault(require("../repositories/clientePJ.repository"));
class ClientePJController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.nome) {
                res.status(400).send({
                    message: "Não pode ser vazio o ClientePJ!"
                });
                return;
            }
            try {
                const clientePJ = req.body;
                let email = null;
                if (email !== null) {
                    clientePJ.email = email;
                }
                /*
                let emailSgd: string | null
                if (emailSgd !== null) {
                  clientePJ.cliente.email = emailSgd;
                }
                */
                let telefone1 = null;
                if (telefone1 !== null) {
                    clientePJ.telefone = telefone1;
                }
                let telefone2 = null;
                if (telefone2 !== null) {
                    clientePJ.telefone = telefone2;
                }
                const savedclientePJ = yield clientePJ_repository_1.default.save(clientePJ);
                res.status(201).send(savedclientePJ);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um ClientePJ."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientesPJ = yield clientePJ_repository_1.default.retrieveAll();
                res.status(200).send(clientesPJ);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os ClientesPJ."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const clientePJ = yield clientePJ_repository_1.default.retrieveById(id);
                if (clientePJ)
                    res.status(200).send(clientePJ);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum ClientePJ com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o ClientePJ com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let clientePJ = req.body;
            clientePJ.cnpj = parseInt(req.params.cnpj);
            try {
                const num = yield clientePJ_repository_1.default.update(clientePJ);
                if (num == 1) {
                    res.send({
                        message: "ClientePJ foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o ClientePJ com o id=${clientePJ.cnpj}. O ClientePJ não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o ClientePJ com id=${clientePJ.cnpj}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield clientePJ_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "ClientePJ deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o ClientePJ com id=${id}. Talvez o ClientePJ não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O ClientePJ com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield clientePJ_repository_1.default.deleteAll();
                res.send({ message: `${num} ClientesPJ foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os ClientesPJ."
                });
            }
        });
    }
}
exports.default = ClientePJController;
//# sourceMappingURL=clientePJ.controller.js.map