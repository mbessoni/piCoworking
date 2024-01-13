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
const cliente_repository_1 = __importDefault(require("../repositories/cliente.repository"));
class ClienteController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.nome) {
                res.status(400).send({
                    message: "Não pode ser vazio o Cliente!"
                });
                return;
            }
            /*
            try {
              const cliente: Cliente = req.body;
              let emailPrc: string | null
              if (emailPrc !== null) {
                cliente.email = emailPrc;
              }
              let emailSgd: string | null
              if (emailSgd !== null) {
                cliente.email = emailSgd;
              }
              let telefonePrc: string | null
              if (telefonePrc !== null) {
                cliente.telefone = telefonePrc;
              }
              let telefoneSgd: string | null
              if (telefoneSgd !== null) {
                cliente.telefone = telefoneSgd;
              }
              */
            try {
                const cliente = req.body;
                // Correção na validação de email e telefone
                if (req.body.emailPrc !== undefined) {
                    cliente.email = req.body.emailPrc;
                }
                if (req.body.emailSgd !== undefined) {
                    cliente.email = req.body.emailSgd;
                }
                if (req.body.telefonePrc !== undefined) {
                    cliente.telefone = req.body.telefonePrc;
                }
                if (req.body.telefoneSgd !== undefined) {
                    cliente.telefone = req.body.telefoneSgd;
                }
                const savedcliente = yield cliente_repository_1.default.save(cliente);
                res.status(201).send(savedcliente);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um cliente."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientes = yield cliente_repository_1.default.retrieveAll();
                res.status(200).send(clientes);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os clientes."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const cliente = yield cliente_repository_1.default.retrieveById(id);
                if (cliente)
                    res.status(200).send(cliente);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum cliente com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o Cliente com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cliente = req.body;
            cliente.idCliente = parseInt(req.params.id);
            try {
                const num = yield cliente_repository_1.default.update(cliente);
                if (num == 1) {
                    res.send({
                        message: "cliente foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o Cliente com o id=${cliente.idCliente}. O Cliente não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o Cliente com id=${cliente.idCliente}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield cliente_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "Cliente deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o Cliente com id=${id}. Talvez o Cliente não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O Cliente com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield cliente_repository_1.default.deleteAll();
                res.send({ message: `${num} Clientes foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os clientes."
                });
            }
        });
    }
}
exports.default = ClienteController;
//# sourceMappingURL=cliente.controller.js.map