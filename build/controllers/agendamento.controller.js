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
const agendamento_repository_1 = __importDefault(require("../repositories/agendamento.repository"));
class AgendamentoController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.id) {
                res.status(400).send({
                    message: "Não pode ser vazio o agendamento!"
                });
                return;
            }
            try {
                const agendamento = req.body;
                const savedAgendamento = yield agendamento_repository_1.default.save(agendamento);
                res.status(201).send(savedAgendamento);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro ao tentar salvar um agendamento."
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agendamentos = yield agendamento_repository_1.default.retrieveAll();
                res.status(200).send(agendamentos);
            }
            catch (err) {
                res.status(500).send({
                    message: "Erro encontrado quando estava se fazendo a busca por todos os agendamentos."
                });
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const agendamento = yield agendamento_repository_1.default.retrieveById(id);
                if (agendamento)
                    res.status(200).send(agendamento);
                else
                    res.status(404).send({
                        message: `Não foi encontrado nenhum agendamento com esse id=${id}.`
                    });
            }
            catch (err) {
                res.status(500).send({
                    message: `Error não foi possível retornar o agendamento com id=${id}.`
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let agendamento = req.body;
            agendamento.idAgendamento = parseInt(req.params.id);
            try {
                const num = yield agendamento_repository_1.default.update(agendamento);
                if (num == 1) {
                    res.send({
                        message: "Agendamento foi atualizado com sucesso."
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível ataulizar o agendamento com o id=${agendamento.idAgendamento}. O agendamento não foi encontrado, ou ele está vazio!`
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `Error ao atualizar o agendamento com id=${agendamento.idAgendamento}.`
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const num = yield agendamento_repository_1.default.delete(id);
                if (num == 1) {
                    res.send({
                        message: "agendamento deletado com sucesso!"
                    });
                }
                else {
                    res.send({
                        message: `Não foi possível deletar o agendamento com id=${id}. Talvez o agendamento não tenha sido encontrado.`,
                    });
                }
            }
            catch (err) {
                res.status(500).send({
                    message: `O agendamento com id==${id}, não pode ser deletado.`
                });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const num = yield agendamento_repository_1.default.deleteAll();
                res.send({ message: `${num} agendamento foram deletados com sucesso!` });
            }
            catch (err) {
                res.status(500).send({
                    message: "Algum erro ocorreu enquato deletava todos os agendamento."
                });
            }
        });
    }
}
exports.default = AgendamentoController;
//# sourceMappingURL=agendamento.controller.js.map