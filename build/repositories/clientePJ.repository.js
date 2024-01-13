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
class ClientePJRepository {
    constructor() {
        this.clientesPJDB = new Array();
    }
    save(clientePJ) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.clientesPJDB.push(clientePJ);
                return clientePJ;
            }
            catch (err) {
                throw new Error("Falha ao criar o ClientePJ!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.clientesPJDB;
            }
            catch (error) {
                throw new Error("Falha ao retornar os ClientePJ!");
            }
        });
    }
    retrieveById(clientePJId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                var clientePJEncontrado = null;
                this.clientesPJDB.forEach(element => {
                    if (element.cnpj == clientePJId) {
                        clientePJEncontrado = element;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return clientePJEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o ClientePJ!");
            }
        });
    }
    /*
    async update(clientePJ: ClientePJ): Promise<number> {
        const { id, nome , emails, telefones , endereco, contrato, status , dataCadastro, dataAlteracao, cnpj, razaoSocial} = clientePJ;
        try {
            var encontrado = false;
            this.clientesPJDB.forEach(element => {
                if (element.id == clientePJ.id) {
                    element.nome = clientePJ.nome;
                    element.emails = clientePJ.emails;
                    element.telefones = clientePJ.telefones;
                    element.endereco = clientePJ.endereco;
                    element.contrato = clientePJ.contrato;
                    element.status = clientePJ.status;
                    element.dataCadastro = clientePJ.dataCadastro;
                    element.dataAlteracao = clientePJ.dataAlteracao;
                    element.cnpj = clientePJ.cnpj;
                    element.razaoSocial = clientePJ.razaoSocial;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao atualizar o ClientePJ!");
        }
    }
  
    */
    update(clientePJ) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cnpj, razaoSocial, nomeFantasia, dataFundacao } = clientePJ;
            try {
                var encontrado = false;
                this.clientesPJDB.forEach(element => {
                    if (element.cnpj == clientePJ.cnpj) {
                        element.cnpj = clientePJ.cnpj;
                        element.razaoSocial = clientePJ.razaoSocial;
                        element.nomeFantasia = clientePJ.nomeFantasia;
                        element.dataFundacao = dataFundacao;
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o ClientePJ!");
            }
        });
    }
    delete(clientePJId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var encontrado = false;
                this.clientesPJDB.forEach(element => {
                    if (element.cnpj == clientePJId) {
                        this.clientesPJDB.splice(this.clientesPJDB.indexOf(element), 1);
                        encontrado = true;
                    }
                });
                if (encontrado) {
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o ClientePJ!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let num = this.clientesPJDB.length;
                this.clientesPJDB.splice(0, this.clientesPJDB.length);
                return num;
            }
            catch (error) {
                throw new Error("Falha ao deletar todos os ClientePJ!");
            }
        });
    }
}
exports.default = new ClientePJRepository();
//# sourceMappingURL=clientePJ.repository.js.map