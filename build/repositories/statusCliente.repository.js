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
const data_source_1 = require("../db/data-source");
const statusCliente_1 = require("../models/statusCliente");
class StatusClienteRepository {
    constructor() {
        this.statusCliDB = data_source_1.AppDataSource.getRepository(statusCliente_1.StatusCliente);
    }
    save(status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.statusCliDB.save(status);
                return status;
            }
            catch (err) {
                throw new Error("Falha ao criar o StatusCliente!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.statusCliDB.find();
            }
            catch (error) {
                throw new Error("Falha ao retornar os StatusCliente!");
            }
        });
    }
    retrieveById(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var statusEncontrado = this.statusCliDB.findOneBy({
                    idStatusCliente: statusId,
                });
                if (statusEncontrado) {
                    return statusEncontrado;
                }
                return null;
            }
            catch (error) {
                throw new Error("Falha ao buscar o StatusCliente!");
            }
        });
    }
    // repensar, acredito que não precisa de retorno.
    update(status) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idStatusCliente, tipo } = status;
            try {
                this.statusCliDB.save(status);
                return 1;
            }
            catch (error) {
                throw new Error("Falha ao atualizar o StatusCliente!");
            }
        });
    }
    delete(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var statusEncontrado = yield this.statusCliDB.findOneBy({
                    idStatusCliente: statusId,
                });
                if (statusEncontrado) {
                    this.statusCliDB.remove(statusEncontrado);
                    return 1;
                }
                return 0;
            }
            catch (error) {
                throw new Error("Falha ao deletar o StatusCliente!");
            }
        });
    }
}
exports.default = new StatusClienteRepository();
//# sourceMappingURL=statusCliente.repository.js.map