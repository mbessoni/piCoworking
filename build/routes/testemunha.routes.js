"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testemunha_controller_1 = __importDefault(require("../controllers/testemunha.controller"));
class TestemunhaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new testemunha_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar uma nova testemunha.
        this.router.post("/testemunha", this.controller.create);
        // Retornar as testemunhas já cadastradas.
        this.router.get("/testemunhas", this.controller.findAll);
        // Retorna uma testemunha específico pelo seu id
        this.router.get("/testemunha/:id", this.controller.findOne);
        // Atualizar uma testemunha pelo seu id
        this.router.put("/testemunha/:id", this.controller.update);
        // Deleta uma testemunha pelo seu id
        this.router.delete("/testemunha/:id", this.controller.delete);
        // Deleta todas as testemunhas
        this.router.delete("/testemunhas/", this.controller.deleteAll);
    }
}
exports.default = new TestemunhaRoutes().router;
//# sourceMappingURL=testemunha.routes.js.map