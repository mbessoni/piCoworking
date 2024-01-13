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
class TestemunhaRepository {
    constructor() {
        this.testemunhasDB = new Array();
    }
    save(testemunha) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.testemunhasDB.push(testemunha);
                return testemunha;
            }
            catch (err) {
                throw new Error("Falha ao criar o Testemunha!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.testemunhasDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os Testemunha!");
            }
        });
    }
    retrieveById(testemunhaId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var testemunhaEncontrado = null;
                this.testemunhasDB.forEach(element => {
                    if (element.idTestemunha == testemunhaId) {
                        testemunhaEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return testemunhaEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o Testemunha!");
            }
        });
    }
    update(testemunha) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idTestemunha, nome, cpf } = testemunha;
            try {
                var encontrado = false;
                this.testemunhasDB.forEach(element => {
                    if (element.idTestemunha == testemunha.idTestemunha) {
                        element.nome = testemunha.nome;
                        element.cpf = testemunha.cpf;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o Testemunha!");
            }
        });
    }
    delete(testemunhaId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.testemunhasDB.forEach(element => {
                    if (element.idTestemunha == testemunhaId) {
                        this.testemunhasDB.splice(this.testemunhasDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o Testemunha!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.testemunhasDB.length;
                this.testemunhasDB.splice(0, this.testemunhasDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os Testemunha!");
            }
        });
    }
}
exports.default = new TestemunhaRepository();
//# sourceMappingURL=testemunha.repository.js.map