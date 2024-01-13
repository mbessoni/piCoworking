"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statusSala_controller_1 = __importDefault(require("../controllers/statusSala.controller"));
class StatusSalaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new statusSala_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar um novo statusSala.
        this.router.post("/statusSala", this.controller.create);
        // Retornar os statusSalas já cadastrados.
        this.router.get("/statusSalas", this.controller.findAll);
        // Retorna um statusSala específico pelo seu id
        this.router.get("/statusSala/:id", this.controller.findOne);
        // Atualizar um statusSala pelo seu id
        this.router.put("/statusSala/:id", this.controller.update);
        // Deleta um statusSala pelo seu id
        this.router.delete("/statusSala/:id", this.controller.delete);
        // Deleta todos os statusSalas
        this.router.delete("/statusSalas/", this.controller.deleteAll);
    }
}
exports.default = new StatusSalaRoutes().router;
//# sourceMappingURL=statusSala.routes.js.map