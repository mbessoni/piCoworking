"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientePJ_controller_1 = __importDefault(require("../controllers/clientePJ.controller"));
class ClientePJRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new clientePJ_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar um novo clientePJ.
        this.router.post("/clientePJ", this.controller.create);
        // Retornar os clientesPJ já cadastrados.
        this.router.get("/clientesPJ", this.controller.findAll);
        // Retorna um clientePJ específico pelo seu id
        this.router.get("/clientePJ/:id", this.controller.findOne);
        // Atualizar um clientePJ pelo seu id
        this.router.put("/clientePJ/:id", this.controller.update);
        // Deleta um clientePJ pelo seu id
        this.router.delete("/clientePJ/:id", this.controller.delete);
        // Deleta todos os clientesPJ
        //this.router.delete("/clientesPJ/", this.controller.deleteAll);
    }
}
exports.default = new ClientePJRoutes().router;
//# sourceMappingURL=clientePJ.routes.js.map