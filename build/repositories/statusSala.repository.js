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
class StatusSalaRepository {
    constructor() {
        this.statusesDB = new Array();
    }
    save(status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.statusesDB.push(status);
                return status;
            }
            catch (err) {
                throw new Error("Falha ao criar o StatusSala!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.statusesDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os StatusSala!");
            }
        });
    }
    retrieveById(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var statusEncontrado = null;
                this.statusesDB.forEach(element => {
                    if (element.idStatus == statusId) {
                        statusEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return statusEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o StatusSala!");
            }
        });
    }
    update(statusSalas) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idStatus, tipo } = statusSalas;
            try {
                var encontrado = false;
                this.statusesDB.forEach(element => {
                    if (element.idStatus == statusSalas.idStatus) {
                        element.tipo == statusSalas.tipo;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o statusSala!");
            }
        });
    }
    delete(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.statusesDB.forEach(element => {
                    if (element.idStatus == statusId) {
                        this.statusesDB.splice(this.statusesDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o statusSala!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.statusesDB.length;
                this.statusesDB.splice(0, this.statusesDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os statusSala!");
            }
        });
    }
}
exports.default = new StatusSalaRepository();
//# sourceMappingURL=statusSala.repository.js.map