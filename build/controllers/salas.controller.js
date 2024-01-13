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
const salas_repository_1 = __importDefault(require("../repositories/salas.repository"));
class SalaController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.nome) {
                res.status(400).send({
                    message: "Não pode ser vazio a sala!"
                });
                return;
            }
            try {
                const salas = req.body;
                const savedSalas = yield salas_repository_1.default.save(salas);
                res.status(201).send(savedSalas);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar uma sala."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sala = yield salas_repository_1.default.retrieveAll();
                res.status(200).send(sala);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos as salas."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const sala = yield salas_repository_1.default.retrieveById(id);
                if (sala)
                    res.status(200).send(sala);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhuma sala com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar a Sala com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let sala = req.body;
            sala.idSala = parseInt(req.params.id);
            try {
                const num = yield salas_repository_1.default.update(sala);
                if (num == 1) {
                    res.send({
                        message: "Sala foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível atualizar a Sala com o id=${sala.idSala}. A Sala não foi encontrada, ou ela está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar a Sala com id=${sala.idSala}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield salas_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "Sala deletada com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar a Sala com id=${id}. Talvez a Sala não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `A Sala com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield salas_repository_1.default.deleteAll();
                res.send({ message: `${num} Salas foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos as salas."
                });
            }
        });
    }
}
exports.default = SalaController;
//# sourceMappingURL=salas.controller.js.map