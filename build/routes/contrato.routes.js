"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contrato_controller_1 = __importDefault(require("../controllers/contrato.controller"));
class ContratoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new contrato_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar um novo contrato.
        this.router.post("/contrato", this.controller.create);
        // Retornar os contratos já cadastrados.
        this.router.get("/contratos", this.controller.findAll);
        // Retorna um contrato específico pelo seu id
        this.router.get("/contrato/:id", this.controller.findOne);
        // Atualizar um contrato pelo seu id
        this.router.put("/contrato/:id", this.controller.update);
        // Deleta um contrato pelo seu id
        this.router.delete("/contrato/:id", this.controller.delete);
        // Deleta todos os contratos
        //this.router.delete("/contratos/", this.controller.deleteAll);
    }
}
exports.default = new ContratoRoutes().router;
//# sourceMappingURL=contrato.routes.js.map