"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const funcionario_controller_1 = __importDefault(require("../controllers/funcionario.controller"));
class FuncionarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new funcionario_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar um novo funcionario.
        this.router.post("/funcionario", this.controller.create);
        // Retornar os funcionarios já cadastrados.
        this.router.get("/funcionarios", this.controller.findAll);
        // Retorna um funcionario específico pelo seu id
        this.router.get("/funcionario/:id", this.controller.findOne);
        // Atualizar um funcionario pelo seu id
        this.router.put("/funcionario/:id", this.controller.update);
        // Deleta um funcionario pelo seu id
        this.router.delete("/funcionario/:id", this.controller.delete);
        // Deleta todos os funcionarios
        this.router.delete("/funcionarios/", this.controller.deleteAll);
    }
}
exports.default = new FuncionarioRoutes().router;
//# sourceMappingURL=funcionario.routes.js.map