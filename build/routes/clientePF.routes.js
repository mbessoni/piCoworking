"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientePF_controller_1 = __importDefault(require("../controllers/clientePF.controller"));
class ClientePFRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new clientePF_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar um novo clientePF.
        this.router.post("/clientePF", this.controller.create);
        // Retornar os clientesPF já cadastrados.
        this.router.get("/clientesPF", this.controller.findAll);
        // Retorna um clientePF específico pelo seu id
        this.router.get("/clientePF/:id", this.controller.findOne);
        // Atualizar um clientePF pelo seu id
        this.router.put("/clientePF/:id", this.controller.update);
        // Deleta um clientePF pelo seu id
        this.router.delete("/clientePF/:id", this.controller.delete);
        // Deleta todos os clientesPF
        //this.router.delete("/clientesPF/", this.controller.deleteAll);
    }
}
exports.default = new ClientePFRoutes().router;
//# sourceMappingURL=clientePF.routes.js.map