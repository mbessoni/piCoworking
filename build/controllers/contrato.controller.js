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
const contrato_repository_1 = __importDefault(require("../repositories/contrato.repository"));
class ContratoController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.id) {
                res.status(400).send({
                    message: "Não pode ser vazio o Contrato!"
                });
                return;
            }
            try {
                const contrato = req.body;
                const savedContrato = yield contrato_repository_1.default.save(contrato);
                res.status(201).send(savedContrato);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um Contrato."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contratos = yield contrato_repository_1.default.retrieveAll();
                res.status(200).send(contratos);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os Contratos."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const contrato = yield contrato_repository_1.default.retrieveById(id);
                if (contrato)
                    res.status(200).send(contrato);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum Contrato com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o Contrato com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let contrato = req.body;
            contrato.idContrato = parseInt(req.params.id);
            try {
                const num = yield contrato_repository_1.default.update(contrato);
                if (num == 1) {
                    res.send({
                        message: "Contrato foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o Contrato com o id=${contrato.idContrato}. O Contrato não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o Contrato com id=${contrato.idContrato}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield contrato_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "Contrato deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o Contrato com id=${id}. Talvez o Contrato não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O Contrato com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield contrato_repository_1.default.deleteAll();
                res.send({ message: `${num} Contrato foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os Contrato."
                });
            }
        });
    }
}
exports.default = ContratoController;
//# sourceMappingURL=contrato.controller.js.map