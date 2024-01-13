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
class SalasRepository {
    constructor() {
        this.salassDB = new Array();
    }
    save(salas) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.salassDB.push(salas);
                return salas;
            }
            catch (err) {
                throw new Error("Falha ao criar o salas!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.salassDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os salas!");
            }
        });
    }
    retrieveById(salasId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var salasEncontrado = null;
                this.salassDB.forEach(element => {
                    if (element.idSala == salasId) {
                        salasEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return salasEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o salas!");
            }
        });
    }
    update(salas) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idSala, nome, qtdPessoas, tipoSala, statusSala, obs } = salas;
            try {
                var encontrado = false;
                this.salassDB.forEach(element => {
                    if (element.idSala == salas.idSala) {
                        element.nome = salas.nome;
                        element.qtdPessoas = salas.qtdPessoas;
                        element.tipoSala = salas.tipoSala;
                        element.statusSala = salas.statusSala;
                        element.obs = salas.obs;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar as salas!");
            }
        });
    }
    delete(salasId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.salassDB.forEach(element => {
                    if (element.idSala == salasId) {
                        this.salassDB.splice(this.salassDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o salas!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.salassDB.length;
                this.salassDB.splice(0, this.salassDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os salas!");
            }
        });
    }
}
exports.default = new SalasRepository();
//# sourceMappingURL=salas.repository.js.map