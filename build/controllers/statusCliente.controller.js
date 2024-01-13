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
const statusCliente_repository_1 = __importDefault(require("../repositories/statusCliente.repository"));
class StatusClienteController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body) {
                res.status(400).send({
                    message: "Não pode ser vazio o StatusCliente!"
                });
                return;
            }
            try {
                const status = req.body;
                const savedStatusCliente = yield statusCliente_repository_1.default.save(status);
                res.status(201).send(savedStatusCliente);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um StatusCliente."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const statuses = yield statusCliente_repository_1.default.retrieveAll();
                res.status(200).send(statuses);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os StatusCliente."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const status = yield statusCliente_repository_1.default.retrieveById(id);
                if (status)
                    res.status(200).send(status);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum StatusCliente com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o StatusCliente com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let status = req.body;
            status.idStatusCliente = parseInt(req.params.id);
            try {
                const num = yield statusCliente_repository_1.default.update(status);
                if (num == 1) {
                    res.send({
                        message: "StatusCliente foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o StatusCliente com o id=${status.idStatusCliente}. O StatusCliente não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o StatusCliente com id=${status.idStatusCliente}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield statusCliente_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "StatusCliente deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o StatusCliente com id=${id}. Talvez o statusCliente não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O StatusCliente com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
}
exports.default = StatusClienteController;
//# sourceMappingURL=statusCliente.controller.js.map