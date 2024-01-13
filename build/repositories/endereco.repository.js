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
class EnderecoRepository {
    constructor() {
        this.enderecosDB = new Array();
    }
    save(endereco) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.enderecosDB.push(endereco);
                return endereco;
            }
            catch (err) {
                throw new Error("Falha ao criar o Endereco!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.enderecosDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os Endereco!");
            }
        });
    }
    retrieveById(enderecoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var enderecoEncontrado = null;
                this.enderecosDB.forEach(element => {
                    if (element.IdEndereco == enderecoId) {
                        enderecoEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return enderecoEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o Endereco!");
            }
        });
    }
    update(endereco) {
        return __awaiter(this, void 0, void 0, function* () {
            const { IdEndereco, uf, cep, cidade, bairro, rua, numero, complemento } = endereco;
            try {
                var encontrado = false;
                this.enderecosDB.forEach(element => {
                    if (element.IdEndereco == endereco.IdEndereco) {
                        element.uf = endereco.uf;
                        element.cep = endereco.cep;
                        element.cidade = endereco.cidade;
                        element.bairro = endereco.bairro;
                        element.rua = endereco.rua;
                        element.numero = endereco.numero;
                        element.complemento = endereco.complemento;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o Endereco!");
            }
        });
    }
    delete(enderecoId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.enderecosDB.forEach(element => {
                    if (element.IdEndereco == enderecoId) {
                        this.enderecosDB.splice(this.enderecosDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o Endereco!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.enderecosDB.length;
                this.enderecosDB.splice(0, this.enderecosDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os Enderecos!");
            }
        });
    }
}
exports.default = new EnderecoRepository();
//# sourceMappingURL=endereco.repository.js.map