"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoSala_controller_1 = __importDefault(require("../controllers/tipoSala.controller"));
class TipoSalaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new tipoSala_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Criar uma nova tipoSala.
        this.router.post("/tipoSala", this.controller.create);
        // Retornar as tipoSalas já cadastradas.
        this.router.get("/tipoSalas", this.controller.findAll);
        // Retorna uma tipoSala específica pelo seu id
        this.router.get("/tipoSala/:id", this.controller.findOne);
        // Atualizar uma tipoSala pelo seu id
        this.router.put("/tipoSala/:id", this.controller.update);
        // Deleta uma tipoSala pelo seu id
        this.router.delete("/tipoSala/:id", this.controller.delete);
        // Deleta todas as tipoSalas
        this.router.delete("/tipoSalas/", this.controller.deleteAll);
    }
}
exports.default = new TipoSalaRoutes().router;
//# sourceMappingURL=tipoSala.routes.js.map