import { Router } from "express";
import TestemunhaController from "../controllers/testemunha.controller";


class TestemunhaRoutes {
  router = Router();
  controller = new TestemunhaController();

  constructor() {
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
     //this.router.delete("/testemunhas/", this.controller.deleteAll);
  }
}

export default new TestemunhaRoutes().router;