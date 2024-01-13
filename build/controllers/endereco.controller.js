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
const endereco_repository_1 = __importDefault(require("../repositories/endereco.repository"));
class EnderecoController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.uf) {
                res.status(400).send({
                    message: "Não pode ser vazio o Endereco!"
                });
                return;
            }
            try {
                const endereco = req.body;
                const savedEndereco = yield endereco_repository_1.default.save(endereco);
                res.status(201).send(savedEndereco);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um Endereco."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const enderecos = yield endereco_repository_1.default.retrieveAll();
                res.status(200).send(enderecos);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os Enderecos."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const endereco = yield endereco_repository_1.default.retrieveById(id);
                if (endereco)
                    res.status(200).send(endereco);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum Endereco com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o Endereco com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let endereco = req.body;
            endereco.IdEndereco = parseInt(req.params.id);
            try {
                const num = yield endereco_repository_1.default.update(endereco);
                if (num == 1) {
                    res.send({
                        message: "Endereco foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o Endereco com o id=${endereco.IdEndereco}. O Endereco não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o Endereco com id=${endereco.IdEndereco}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield endereco_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "Endereco deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o Endereco com id=${id}. Talvez o Endereco não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O Endereco com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield endereco_repository_1.default.deleteAll();
                res.send({ message: `${num} Endereco foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os Endereco."
                });
            }
        });
    }
}
exports.default = EnderecoController;
//# sourceMappingURL=endereco.controller.js.map