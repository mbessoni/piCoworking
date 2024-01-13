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
class TelefoneRepository {
    constructor() {
        this.telefonesDB = new Array();
    }
    save(telefone) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.telefonesDB.push(telefone);
                return telefone;
            }
            catch (err) {
                throw new Error("Falha ao criar o Telefone!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.telefonesDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os Telefones!");
            }
        });
    }
    retrieveById(telefoneId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var telefoneEncontrado = null;
                this.telefonesDB.forEach(element => {
                    if (element.idTelefone == telefoneId) {
                        telefoneEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return telefoneEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o Telefone!");
            }
        });
    }
    update(telefone) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idTelefone, telefone1, telefone2 } = telefone;
            try {
                var encontrado = false;
                this.telefonesDB.forEach(element => {
                    if (element.idTelefone == telefone.idTelefone) {
                        element.telefone1 = telefone.telefone1;
                        element.telefone2 = telefone.telefone2;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o Telefone!");
            }
        });
    }
    delete(telefoneId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.telefonesDB.forEach(element => {
                    if (element.idTelefone == telefoneId) {
                        this.telefonesDB.splice(this.telefonesDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o Telefone!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.telefonesDB.length;
                this.telefonesDB.splice(0, this.telefonesDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os Telefone!");
            }
        });
    }
}
exports.default = new TelefoneRepository();
//# sourceMappingURL=telefone.repository.js.map