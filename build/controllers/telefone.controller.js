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
const telefone_repository_1 = __importDefault(require("../repositories/telefone.repository"));
class TelefoneController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.numTelefone) {
                res.status(400).send({
                    message: "Não pode ser vazio o Telefone!"
                });
                return;
            }
            try {
                const telefone = req.body;
                const savedTelefone = yield telefone_repository_1.default.save(telefone);
                res.status(201).send(savedTelefone);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um Telefone."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const telefones = yield telefone_repository_1.default.retrieveAll();
                res.status(200).send(telefones);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os Telefones."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const telefone = yield telefone_repository_1.default.retrieveById(id);
                if (telefone)
                    res.status(200).send(telefone);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum Telefone com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o Telefone com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let telefone = req.body;
            telefone.idTelefone = parseInt(req.params.id);
            try {
                const num = yield telefone_repository_1.default.update(telefone);
                if (num == 1) {
                    res.send({
                        message: "Telefone foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o Telefone com o id=${telefone.idTelefone}. O Telefone não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o Telefone com id=${telefone.idTelefone}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield telefone_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "Telefone deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o Telefone com id=${id}. Talvez o Telefone não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O Telefone com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield telefone_repository_1.default.deleteAll();
                res.send({ message: `${num} Telefone foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os Telefone."
                });
            }
        });
    }
}
exports.default = TelefoneController;
//# sourceMappingURL=telefone.controller.js.map