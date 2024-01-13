"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autorizacao_controller_1 = __importDefault(require("../controllers/autorizacao.controller"));
class AutorizacaoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new autorizacao_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar uma nova sala.
        this.router.post("/sala", this.controller.create);
        // Retornar as salas já cadastrados.
        this.router.get("/salas", this.controller.findAll);
        // Retorna um genero específico pelo seu id
        this.router.get("/sala/:id", this.controller.findOne);
        // Atualizar um genero pelo seu id
        this.router.put("/sala/:id", this.controller.update);
        // Deleta um genero pelo seu id
        this.router.delete("/sala/:id", this.controller.delete);
        // Deleta todos os generos
        //this.router.delete("/salas/", this.controller.deleteAll);
    }
}
exports.default = new AutorizacaoRoutes().router;
//# sourceMappingURL=autorizacao.routes.js.map