"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = __importDefault(require("../controllers/cliente.controller"));
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new cliente_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar um novo cliente.
        this.router.post("/cliente", this.controller.create);
        // Retornar os clientes já cadastrados.
        this.router.get("/clientes", this.controller.findAll);
        // Retorna um cliente específico pelo seu id
        this.router.get("/cliente/:id", this.controller.findOne);
        // Atualizar um cliente pelo seu id
        this.router.put("/cliente/:id", this.controller.update);
        // Deleta um cliente pelo seu id
        this.router.delete("/cliente/:id", this.controller.delete);
        // Deleta todos os clientes
        //this.router.delete("/cliente/", this.controller.deleteAll);
    }
}
exports.default = new ClienteRoutes().router;
//# sourceMappingURL=cliente.routes.js.map