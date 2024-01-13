"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { welcome } from "../controllers/home.controller";
class HomeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get("/", (req, res) => { return res.status(200).json("Bem Vindo ao Coworking!"); });
        this.router.get("/busca", (req, res) => { return res.status(200).json("Elizabeth até agora não temos cadastrados no coworking"); });
    }
}
exports.default = new HomeRoutes().router;
//# sourceMappingURL=home.routes.js.map