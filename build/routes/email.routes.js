"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const email_controller_1 = __importDefault(require("../controllers/email.controller"));
class EmailRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new email_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar um novo email.
        this.router.post("/email", this.controller.create);
        // Retornar os emails já cadastrados.
        this.router.get("/emails", this.controller.findAll);
        // Retorna um email específico pelo seu id
        this.router.get("/email/:id", this.controller.findOne);
        // Atualizar um email pelo seu id
        this.router.put("/email/:id", this.controller.update);
        // Deleta um email pelo seu id
        this.router.delete("/email/:id", this.controller.delete);
        // Deleta todos os emails
        //this.router.delete("/emails/", this.controller.deleteAll);
    }
}
exports.default = new EmailRoutes().router;
//# sourceMappingURL=email.routes.js.map