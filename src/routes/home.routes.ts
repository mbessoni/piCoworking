import { Router, Request, Response } from "express";
// import { welcome } from "../controllers/home.controller";

class HomeRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/", (req: Request, res: Response) => { return res.status(200).json("Bem Vindo ao Coworking!") });
    this.router.get("/busca", (req: Request, res: Response) => { return res.status(200).json("Elizabeth até agora não temos cadastrados no coworking") });
  }
}

export default new HomeRoutes().router;