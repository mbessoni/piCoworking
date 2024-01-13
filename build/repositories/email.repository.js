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
const Email_1 = require("../models/Email");
class EmailRepository {
    constructor() {
        this.emailsDB = new Array();
    }
    save(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.emailsDB.push(email);
                return email;
            }
            catch (err) {
                throw new Error("Falha ao criar o Email!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.emailsDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os Email!");
            }
        });
    }
    retrieveById(emailId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var emailEncontrado = null;
                this.emailsDB.forEach(element => {
                    if (element.idEmail == emailId) {
                        emailEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return emailEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o Email!");
            }
        });
    }
    update(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idEmail, email1 } = email;
            try {
                var encontrado = false;
                this.emailsDB.forEach(element => {
                    if (element.idEmail == email.idEmail) {
                        element.email = Email_1.Email.email;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o Email!");
            }
        });
    }
    delete(emailId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.emailsDB.forEach(element => {
                    if (element.idEmail == emailId) {
                        this.emailsDB.splice(this.emailsDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o Email!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.emailsDB.length;
                this.emailsDB.splice(0, this.emailsDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os Email!");
            }
        });
    }
}
exports.default = new EmailRepository();
//# sourceMappingURL=email.repository.js.map