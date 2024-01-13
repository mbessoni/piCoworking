"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const endereco_controller_1 = __importDefault(require("../controllers/endereco.controller"));
class EnderecoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new endereco_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar um novo endereco.
        this.router.post("/endereco", this.controller.create);
        // Retornar os enderecos já cadastrados.
        this.router.get("/enderecos", this.controller.findAll);
        // Retorna um endereco específico pelo seu id
        this.router.get("/endereco/:id", this.controller.findOne);
        // Atualizar um endereco pelo seu id
        this.router.put("/endereco/:id", this.controller.update);
        // Deleta um endereco pelo seu id
        this.router.delete("/endereco/:id", this.controller.delete);
        // Deleta todos os enderecos
        //this.router.delete("/enderecos/", this.controller.deleteAll);
    }
}
exports.default = new EnderecoRoutes().router;
//# sourceMappingURL=endereco.routes.js.map