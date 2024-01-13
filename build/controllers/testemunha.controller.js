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
const testemunha_repository_1 = __importDefault(require("../repositories/testemunha.repository"));
class TestemunhaController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.nome) {
                res.status(400).send({
                    message: "Não pode ser vazio o Testemunha!"
                });
                return;
            }
            try {
                const testemunha = req.body;
                const savedTestemunha = yield testemunha_repository_1.default.save(testemunha);
                res.status(201).send(savedTestemunha);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um Testemunha."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const testemunhas = yield testemunha_repository_1.default.retrieveAll();
                res.status(200).send(testemunhas);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os Testemunhas."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const testemunha = yield testemunha_repository_1.default.retrieveById(id);
                if (testemunha)
                    res.status(200).send(testemunha);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum Testemunha com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o Testemunha com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let testemunha = req.body;
            testemunha.idTestemunha = parseInt(req.params.id);
            try {
                const num = yield testemunha_repository_1.default.update(testemunha);
                if (num == 1) {
                    res.send({
                        message: "Testemunha foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o Testemunha com o id=${testemunha.idTestemunha}. O Testemunha não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o Testemunha com id=${testemunha.idTestemunha}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield testemunha_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "Testemunha deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o Testemunha com id=${id}. Talvez o Testemunha não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O Testemunha com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield testemunha_repository_1.default.deleteAll();
                res.send({ message: `${num} Testemunha foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os Testemunha."
                });
            }
        });
    }
}
exports.default = TestemunhaController;
//# sourceMappingURL=testemunha.controller.js.map