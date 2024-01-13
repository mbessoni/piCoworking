"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agendamento_controller_1 = __importDefault(require("../controllers/agendamento.controller"));
class AgendamentoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new agendamento_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar uma novo Agendamento.
        this.router.post("/agendamento", this.controller.create);
        // Retornar os agendamentos já cadastrados.
        this.router.get("/agendamentos", this.controller.findAll);
        // Retorna um agendamento específico pelo seu id
        this.router.get("/agendamento/:id", this.controller.findOne);
        // Atualizar um agendamento pelo seu id
        this.router.put("/agendamento/:id", this.controller.update);
        // Deleta um agndamento pelo seu id
        this.router.delete("/agendamento/:id", this.controller.delete);
        // Deleta todos os agendamentos
        //this.router.delete("/agendamentos/", this.controller.deleteAll);
    }
}
exports.default = new AgendamentoRoutes().router;
//# sourceMappingURL=agendamento.routes.js.map