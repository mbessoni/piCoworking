"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new login_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar uma nova login.
        this.router.post("/login", this.controller.create);
        // Retornar os logins já cadastrados.
        this.router.get("/logins", this.controller.findAll);
        // Retorna um login específico pelo seu id
        this.router.get("/login/:id", this.controller.findOne);
        // Atualizar um login pelo seu id
        this.router.put("/login/:id", this.controller.update);
        // Deleta uma login pelo seu id
        this.router.delete("/login/:id", this.controller.delete);
        // Deleta todos os logins
        //this.router.delete("/logins/", this.controller.deleteAll);
    }
}
exports.default = new LoginRoutes().router;
//# sourceMappingURL=login.routes.js.map