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
class AutorizacaoRepository {
    constructor() {
        this.autorizacaoDB = new Array();
    }
    save(autorizacao) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.autorizacaoDB.push(autorizacao);
                return autorizacao;
            }
            catch (err) {
                throw new Error("Falha ao criar a autorizacao!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.autorizacaoDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar as autorizacões!");
            }
        });
    }
    retrieveById(autorizacaoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var autorizacaoEncontrado = null;
                this.autorizacaoDB.forEach(element => {
                    if (element.idAutorizacao == autorizacaoId) {
                        autorizacaoEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return autorizacaoEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar a autorizacao!");
            }
        });
    }
    update(autorizacao) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAutorizacao, tipo, obs, funcionario } = autorizacao;
            try {
                var encontrado = false;
                this.autorizacaoDB.forEach(element => {
                    if (element.idAutorizacao == autorizacao.idAutorizacao) {
                        element.tipo = autorizacao.tipo;
                        element.obs = autorizacao.obs;
                        element.funcionario = autorizacao.funcionario;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar a autorizacao!");
            }
        });
    }
    delete(autorizacaoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.autorizacaoDB.forEach(element => {
                    if (element.idAutorizacao == autorizacaoId) {
                        this.autorizacaoDB.splice(this.autorizacaoDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar a autorizacao!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.autorizacaoDB.length;
                this.autorizacaoDB.splice(0, this.autorizacaoDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todas as autorizacões!");
            }
        });
    }
}
exports.default = new AutorizacaoRepository();
//# sourceMappingURL=autorizacao.repository.js.map