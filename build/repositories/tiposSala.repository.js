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
class TiposSalasRepository {
    constructor() {
        this.tiposSalassDB = new Array();
    }
    save(tipoSalas) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.tiposSalassDB.push(tipoSalas);
                return tipoSalas;
            }
            catch (err) {
                throw new Error("Falha ao criar o tiposSalas!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.tiposSalassDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os tiposSalas!");
            }
        });
    }
    retrieveById(tiposSalasId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var tiposSalasEncontrado = null;
                this.tiposSalassDB.forEach(element => {
                    if (element.idTipoSalas == tiposSalasId) {
                        tiposSalasEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return tiposSalasEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o tiposSalas!");
            }
        });
    }
    update(tipoSalas) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idTipoSalas, tipo } = tipoSalas;
            try {
                var encontrado = false;
                this.tiposSalassDB.forEach(element => {
                    if (element.idTipoSalas == tipoSalas.idTipoSalas) {
                        element.tipo = tipoSalas.tipo;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar as tiposSalas!");
            }
        });
    }
    delete(tipoSalasId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.tiposSalassDB.forEach(element => {
                    if (element.idTipoSalas == tipoSalasId) {
                        this.tiposSalassDB.splice(this.tiposSalassDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o tiposSalas!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.tiposSalassDB.length;
                this.tiposSalassDB.splice(0, this.tiposSalassDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os tiposSalas!");
            }
        });
    }
}
exports.default = new TiposSalasRepository();
//# sourceMappingURL=tiposSala.repository.js.map