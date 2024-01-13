"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statusCliente_controller_1 = __importDefault(require("../controllers/statusCliente.controller"));
class StatusClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new statusCliente_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar um novo statusCliente.
        this.router.post("/statusCliente", this.controller.create);
        // Retornar os statusClientes já cadastrados.
        this.router.get("/statusClientes", this.controller.findAll);
        // Retorna um statusCliente específico pelo seu id
        this.router.get("/statusCliente/:id", this.controller.findOne);
        // Atualizar um statusCliente pelo seu id
        this.router.put("/statusCliente/:id", this.controller.update);
        // Deleta um statusCliente pelo seu id
        this.router.delete("/statusCliente/:id", this.controller.delete);
    }
}
exports.default = new StatusClienteRoutes().router;
//# sourceMappingURL=statusCliente.routes.js.map