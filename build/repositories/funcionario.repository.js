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
class FuncionarioRepository {
    constructor() {
        this.funcionariosDB = new Array();
    }
    save(funcionario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.funcionariosDB.push(funcionario);
                return funcionario;
            }
            catch (err) {
                throw new Error("Falha ao criar o funcionario!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.funcionariosDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os funcionario!");
            }
        });
    }
    retrieveById(funcionarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var funcionarioEncontrado = null;
                this.funcionariosDB.forEach(element => {
                    if (element.cpf == funcionarioId) {
                        funcionarioEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return funcionarioEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o funcionario!");
            }
        });
    }
    update(funcionario) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cpf, nome, email, telefones } = funcionario;
            try {
                var encontrado = false;
                this.funcionariosDB.forEach(element => {
                    if (element.cpf == funcionario.cpf) {
                        element.cpf = funcionario.cpf;
                        element.nome = funcionario.nome;
                        element.email = funcionario.email;
                        element.telefones = funcionario.telefones;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o funcionario!");
            }
        });
    }
    delete(funcionarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.funcionariosDB.forEach(element => {
                    if (element.cpf == funcionarioId) {
                        this.funcionariosDB.splice(this.funcionariosDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o funcionario!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.funcionariosDB.length;
                this.funcionariosDB.splice(0, this.funcionariosDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os funcionario!");
            }
        });
    }
}
exports.default = new FuncionarioRepository();
//# sourceMappingURL=funcionario.repository.js.map