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
Object.defineProperty(exports, "__esModule", { value: true });
class AgendamentoRepository {
    constructor() {
        this.agendamentosDB = new Array();
    }
    save(agendamento) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.agendamentosDB.push(agendamento);
                return agendamento;
            }
            catch (err) {
                throw new Error("Falha ao criar o agendamento!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.agendamentosDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os agendamento!");
            }
        });
    }
    retrieveById(agendamentoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var agendamentoEncontrado = null;
                this.agendamentosDB.forEach(element => {
                    if (element.idAgendamento == agendamentoId) {
                        agendamentoEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return agendamentoEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o agendamento!");
            }
        });
    }
    update(agendamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAgendamento, horaInicio, horaFim, data, salaTrab, autorizacao, login, dataRequisicao, dataAlteracao } = agendamento;
            try {
                var encontrado = false;
                this.agendamentosDB.forEach(element => {
                    if (element.idAgendamento == agendamento.idAgendamento) {
                        element.horaInicio = agendamento.horaInicio;
                        element.horaFim = agendamento.horaFim;
                        element.data = agendamento.data;
                        element.salaTrab = agendamento.salaTrab;
                        element.autorizacao = agendamento.autorizacao;
                        element.login = agendamento.login;
                        element.dataRequisicao = agendamento.dataRequisicao;
                        element.dataAlteracao = agendamento.dataAlteracao;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o agendamento!");
            }
        });
    }
    delete(agendamentoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.agendamentosDB.forEach(element => {
                    if (element.idAgendamento == agendamentoId) {
                        this.agendamentosDB.splice(this.agendamentosDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o agendamento!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.agendamentosDB.length;
                this.agendamentosDB.splice(0, this.agendamentosDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os agendamentos!");
            }
        });
    }
}
exports.default = new AgendamentoRepository();
//# sourceMappingURL=agendamento.repository.js.map