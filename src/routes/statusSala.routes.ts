import { Router } from "express";
import StatusSalaController from "../controllers/statusSala.controller";


class StatusSalaRoutes {
  router = Router();
  controller = new StatusSalaController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo statusSala.
    this.router.post("/statusSala", this.controller.create);

    // Retornar os statusSalas já cadastrados.
    this.router.get("/statusSalas", this.controller.findAll);

     // Retorna um statusSala específico pelo seu id
     this.router.get("/statusSala/:id", this.controller.findOne);

     // Atualizar um statusSala pelo seu id
     this.router.put("/statusSala/:id", this.controller.update);
 
     // Deleta um statusSala pelo seu id
     this.router.delete("/statusSala/:id", this.controller.delete);
 
     // Deleta todos os statusSalas
     //this.router.delete("/statusSalas/", this.controller.deleteAll);
  }
}

export default new StatusSalaRoutes().router;