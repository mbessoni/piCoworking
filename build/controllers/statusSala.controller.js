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
const statusSala_repository_1 = __importDefault(require("../repositories/statusSala.repository")); // Certifique-se de importar o repositório correto
class StatusSalaController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.statusSala) {
                res.status(400).send({
                    message: "Não pode ser vazio o StatusSala!"
                });
                return;
            }
            try {
                const status = req.body;
                const savedStatusSala = yield statusSala_repository_1.default.save(status);
                res.status(201).send(savedStatusSala);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um StatusSala."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const statuses = yield statusSala_repository_1.default.retrieveAll();
                res.status(200).send(statuses);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os StatusSala."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const status = yield statusSala_repository_1.default.retrieveById(id);
                if (status)
                    res.status(200).send(status);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum StatusSala com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o StatusSala com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let status = req.body;
            status.idStatus = parseInt(req.params.id);
            try {
                const num = yield statusSala_repository_1.default.update(status);
                if (num == 1) {
                    res.send({
                        message: "StatusSala foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o StatusSala com o id=${status.idStatus}. O StatusSala não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o StatusSala com id=${status.idStatus}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield statusSala_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "StatusSala deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o StatusSala com id=${id}. Talvez o statusSala não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O StatusSala com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield statusSala_repository_1.default.deleteAll();
                res.send({ message: `${num} StatusSala foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os StatusSala."
                });
            }
        });
    }
}
exports.default = StatusSalaController;
//# sourceMappingURL=statusSala.controller.js.map