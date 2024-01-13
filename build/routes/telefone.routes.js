"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const telefone_controller_1 = __importDefault(require("../controllers/telefone.controller"));
class TelefoneRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new telefone_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar uma nova telefone.
        this.router.post("/telefone", this.controller.create);
        // Retornar as telefones já cadastrados.
        this.router.get("/telefones", this.controller.findAll);
        // Retorna um telefone específico pelo seu id
        this.router.get("/telefone/:id", this.controller.findOne);
        // Atualizar um telefone pelo seu id
        this.router.put("/telefone/:id", this.controller.update);
        // Deleta um telefone pelo seu id
        this.router.delete("/telefone/:id", this.controller.delete);
        // Deleta todos os telefones
        this.router.delete("/telefones/", this.controller.deleteAll);
    }
}
exports.default = new TelefoneRoutes().router;
//# sourceMappingURL=telefone.routes.js.map