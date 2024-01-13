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
class ContratoRepository {
    constructor() {
        this.contratosDB = new Array();
    }
    save(contrato) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.contratosDB.push(contrato);
                return contrato;
            }
            catch (err) {
                throw new Error("Falha ao criar o Contrato!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.contratosDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os contrato!");
            }
        });
    }
    retrieveById(contratoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var contratoEncontrado = null;
                this.contratosDB.forEach(element => {
                    if (element.idContrato == contratoId) {
                        contratoEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return contratoEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o Contrato!");
            }
        });
    }
    update(contrato) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idContrato, dataInicio, dataFinal, dataAlteracao, valor, horaSR, horaSC, qtdBaias, salaTrab, testemunha } = contrato;
            try {
                var encontrado = false;
                this.contratosDB.forEach(element => {
                    if (element.idContrato == contrato.idContrato) {
                        element.dataInicio = contrato.dataInicio;
                        element.dataFinal = contrato.dataFinal;
                        //element.dataCadastro = contrato.dataCadastro;
                        element.dataAlteracao = contrato.dataAlteracao;
                        element.valor = contrato.valor;
                        element.horaSR = contrato.horaSR;
                        element.horaSC = contrato.horaSC;
                        element.qtdBaias = contrato.qtdBaias;
                        element.salaTrab = contrato.salaTrab;
                        element.testemunha = contrato.testemunha;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o Contrato!");
            }
        });
    }
    delete(contratoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.contratosDB.forEach(element => {
                    if (element.idContrato == contratoId) {
                        this.contratosDB.splice(this.contratosDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o Contrato!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.contratosDB.length;
                this.contratosDB.splice(0, this.contratosDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os Contrato!");
            }
        });
    }
}
exports.default = new ContratoRepository();
//# sourceMappingURL=contrato.repository.js.map