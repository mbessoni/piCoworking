import { Router } from "express";
import SalaController from "../controllers/salas.controller";


class SalaRoutes {
  router = Router();
  controller = new SalaController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar uma nova sala.
    this.router.post("/sala", this.controller.create);

    // Retornar as salas já cadastradas.
    this.router.get("/salas", this.controller.findAll);

     // Retorna uma sala específica pelo seu id
     this.router.get("/sala/:id", this.controller.findOne);

     // Atualizar uma sala pelo seu id
     this.router.put("/sala/:id", this.controller.update);
 
     // Deleta uma sala pelo seu id
     this.router.delete("/sala/:id", this.controller.delete);
 
     // Deleta todas as salas
     this.router.delete("/salas/", this.controller.deleteAll);
  }
}

export default new SalaRoutes().router;