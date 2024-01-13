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
const funcionario_repository_1 = __importDefault(require("../repositories/funcionario.repository"));
class FuncionarioController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.nome) {
                res.status(400).send({
                    message: "Não pode ser vazio o funcionario!"
                });
                return;
            }
            try {
                const funcionario = req.body;
                let email = null;
                if (email !== null) {
                    funcionario.email = email;
                }
                /*let emailSgd: string | null
                if (emailSgd !== null) {
                  funcionario.email = emailSgd;
                }
                */
                let telefone1 = null;
                if (telefone1 !== null) {
                    funcionario.telefones = telefone1;
                }
                let telefone2 = null;
                if (telefone2 !== null) {
                    funcionario.telefones = telefone2;
                }
                const savedfuncionario = yield funcionario_repository_1.default.save(funcionario);
                res.status(201).send(savedfuncionario);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um funcionario."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const funcionarios = yield funcionario_repository_1.default.retrieveAll();
                res.status(200).send(funcionarios);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os funcionarios."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpf = parseInt(req.params.cpf);
            try {
                const funcionario = yield funcionario_repository_1.default.retrieveById(cpf);
                if (funcionario)
                    res.status(200).send(funcionario);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum funcionario com esse id=${cpf}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o funcionario com id=${cpf}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let funcionario = req.body;
            try {
                const num = yield funcionario_repository_1.default.update(funcionario);
                if (num == 1) {
                    res.send({
                        message: "funcionario foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o funcionario com o id=${funcionario.cpf}. O funcionario não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o funcionario com id=${funcionario.cpf}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cpf = parseInt(req.params.cpf);
            try {
                const num = yield funcionario_repository_1.default.delete(cpf);
                if (num == 1) {
                    res.send({
                        message: "funcionario deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o funcionario com cpf=${cpf}. Talvez o funcionario não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O funcionario com cpf==${cpf}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield funcionario_repository_1.default.deleteAll();
                res.send({ message: `${num} funcionarios foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os funcionarios."
                });
            }
        });
    }
}
exports.default = FuncionarioController;
//# sourceMappingURL=funcionario.controller.js.map