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
const autorizacao_repository_1 = __importDefault(require("../repositories/autorizacao.repository"));
class AutorizacaoController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.id) {
                res.status(400).send({
                    message: "Não pode ser vazio o autorizacao!"
                });
                return;
            }
            try {
                const autorizacao = req.body;
                const savedAutorizacao = yield autorizacao_repository_1.default.save(autorizacao);
                res.status(201).send(savedAutorizacao);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um autorizacao."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const autorizacao = yield autorizacao_repository_1.default.retrieveAll();
                res.status(200).send(autorizacao);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os autorizacaos."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const autorizacao = yield autorizacao_repository_1.default.retrieveById(id);
                if (autorizacao)
                    res.status(200).send(autorizacao);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum autorizacao com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o autorizacao com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let autorizacao = req.body;
            autorizacao.idAutorizacao = parseInt(req.params.id);
            try {
                const num = yield autorizacao_repository_1.default.update(autorizacao);
                if (num == 1) {
                    res.send({
                        message: "Autorizacao foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o autorizacao com o id=${autorizacao.idAutorizacao}. O autorizacao não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o autorizacao com id=${autorizacao.idAutorizacao}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield autorizacao_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "autorizacao deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o autorizacao com id=${id}. Talvez o autorizacao não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O autorizacao com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield autorizacao_repository_1.default.deleteAll();
                res.send({ message: `${num} autorizacao foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os autorizacao."
                });
            }
        });
    }
}
exports.default = AutorizacaoController;
//# sourceMappingURL=autorizacao.controller.js.map