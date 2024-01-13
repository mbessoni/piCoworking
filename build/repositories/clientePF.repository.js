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
class ClientePFRepository {
    constructor() {
        this.clientesPFDB = new Array();
    }
    save(clientePF) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.clientesPFDB.push(clientePF);
                return clientePF;
            }
            catch (err) {
                throw new Error("Falha ao criar o ClientePF!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.clientesPFDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os ClientePF!");
            }
        });
    }
    retrieveById(clientePFId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var clientePFEncontrado = null;
                this.clientesPFDB.forEach(element => {
                    if (element.cpf == clientePFId) {
                        clientePFEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return clientePFEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o ClientePF!");
            }
        });
    }
    /*
     async update(clientePF: ClientePF): Promise<number> {
         const { id, nome , emails, telefones , endereco, contrato, status , dataCadastro, dataAlteracao, cpf} = clientePF;
         try {
             var encontrado = false;
             this.clientesPFDB.forEach(element => {
                 if (element.id == clientePF.id) {
                     element.nome = clientePF.nome;
                     element.emails = clientePF.emails;
                     element.telefones = clientePF.telefones;
                     element.endereco = clientePF.endereco;
                     element.contrato = clientePF.contrato;
                     element.status = clientePF.status;
                     element.dataCadastro = clientePF.dataCadastro;
                     element.dataAlteracao = clientePF.dataAlteracao;
                     element.cpf = clientePF.cpf;
                     encontrado = true;
                 }
             });
             if (encontrado) {
                 return 1;
             }
             return 0;
         } catch (error) {
             throw new Error("Falha ao atualizar o ClientePF!");
         }
     }
   
     */
    update(clientePF) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, cpf } = clientePF;
            try {
                var encontrado = false;
                this.clientesPFDB.forEach(element => {
                    if (element.cpf == clientePF.cpf) {
                        element.nome = clientePF.nome;
                        //element.emails = clientePF.emails;
                        //element.telefones = clientePF.telefones;
                        //element.endereco = clientePF.endereco;
                        //element.contrato = clientePF.contrato;
                        //element.status = clientePF.status;
                        //element.dataCadastro = clientePF.dataCadastro;
                        //element.dataAlteracao = clientePF.dataAlteracao;
                        element.cpf = clientePF.cpf;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o ClientePF!");
            }
        });
    }
    delete(clientePF) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.clientesPFDB.forEach(element => {
                    if (element.cpf == clientePF) {
                        this.clientesPFDB.splice(this.clientesPFDB.indexOf(element), 1);
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
                let num = this.clientesPFDB.length;
                this.clientesPFDB.splice(0, this.clientesPFDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os Cliente!");
            }
        });
    }
}
exports.default = new ClientePFRepository();
//# sourceMappingURL=clientePF.repository.js.map