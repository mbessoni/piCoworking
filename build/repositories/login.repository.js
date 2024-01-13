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
class LoginRepository {
    constructor() {
        this.loginsDB = new Array();
    }
    save(login) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.loginsDB.push(login);
                return login;
            }
            catch (err) {
                throw new Error("Falha ao criar o login!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.loginsDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os login!");
            }
        });
    }
    retrieveById(loginId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var loginEncontrado = null;
                this.loginsDB.forEach(element => {
                    if (element.id == loginId) {
                        loginEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return loginEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o login!");
            }
        });
    }
    update(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, senha } = login;
            try {
                var encontrado = false;
                this.loginsDB.forEach(element => {
                    if (element.id == login.id) {
                        element.id = login.id;
                        element.senha = login.senha;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o login!");
            }
        });
    }
    delete(loginId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.loginsDB.forEach(element => {
                    if (element.id == loginId) {
                        this.loginsDB.splice(this.loginsDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o login!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.loginsDB.length;
                this.loginsDB.splice(0, this.loginsDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os login!");
            }
        });
    }
}
exports.default = new LoginRepository();
//# sourceMappingURL=login.repository.js.map