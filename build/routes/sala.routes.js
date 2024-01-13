"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salas_controller_1 = __importDefault(require("../controllers/salas.controller"));
class SalaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new salas_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar uma nova sala.
        this.router.post("/sala", this.controller.create);
        // Retornar as salas já cadastradas.
        this.router.get("/salas", this.controller.findAll);
        // Retorna uma sala específica pelo seu id
        this.router.get("/sala/:id", this.controller.findOne);
        // Atualizar uma sala pelo seu id
        this.router.put("/sala/:id", this.controller.update);
        // Deleta uma sala pelo seu id
        this.router.delete("/sala/:id", this.controller.delete);
        // Deleta todas as salas
        this.router.delete("/salas/", this.controller.deleteAll);
    }
}
exports.default = new SalaRoutes().router;
//# sourceMappingURL=sala.routes.js.map