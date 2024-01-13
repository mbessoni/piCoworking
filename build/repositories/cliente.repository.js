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
class ClienteRepository {
    constructor() {
        this.clientesDB = new Array();
    }
    save(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.clientesDB.push(cliente);
                return cliente;
            }
            catch (err) {
                throw new Error("Falha ao criar o Cliente!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.clientesDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os Cliente!");
            }
        });
    }
    retrieveById(clienteId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var clienteEncontrado = null;
                this.clientesDB.forEach(element => {
                    if (element.idCliente == clienteId) {
                        clienteEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return clienteEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o Cliente!");
            }
        });
    }
    /*
    async update(cliente: Cliente): Promise<number> {
        const { idCliente, nome , emails, telefones , endereco, contrato, status , dataCadastro, dataAlteracao} = cliente;
        try {
            var encontrado = false;
            this.clientesDB.forEach(element => {
                if (element.idCliente == cliente.idCliente) {
                    element.nome = cliente.nome;
                    element.emails = cliente.emails;
                    element.telefones = cliente.telefones;
                    element.endereco = cliente.endereco;
                    element.contrato = cliente.contrato;
                    element.status = cliente.status;
                    element.dataCadastro = cliente.dataCadastro;
                    element.dataAlteracao = cliente.dataAlteracao;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao atualizar o cliente!");
        }
    }
    */
    update(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCliente, endereco, contrato, } = cliente;
            try {
                var encontrado = false;
                this.clientesDB.forEach(element => {
                    if (element.idCliente == cliente.idCliente) {
                        //element.nome = cliente.nome;
                        //element.emails = cliente.emails;
                        //element.telefones = cliente.telefones;
                        element.endereco = cliente.endereco;
                        element.contrato = cliente.contrato;
                        //element.status = cliente.status;
                        //element.dataCadastro = cliente.dataCadastro;
                        //element.dataAlteracao = cliente.dataAlteracao;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o cliente!");
            }
        });
    }
    delete(clienteId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.clientesDB.forEach(element => {
                    if (element.idCliente == clienteId) {
                        this.clientesDB.splice(this.clientesDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o Cliente!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.clientesDB.length;
                this.clientesDB.splice(0, this.clientesDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os Cliente!");
            }
        });
    }
}
exports.default = new ClienteRepository();
//# sourceMappingURL=cliente.repository.js.map