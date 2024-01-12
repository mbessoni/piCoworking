import { Router } from "express";
import AutorizacaoController from "../controllers/autorizacao.controller";


class AutorizacaoRoutes {
  router = Router();
  controller = new AutorizacaoController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar uma nova sala.
    this.router.post("/sala", this.controller.create);

    // Retornar as salas já cadastrados.
    this.router.get("/salas", this.controller.findAll);

     // Retorna um genero específico pelo seu id
     this.router.get("/sala/:id", this.controller.findOne);

     // Atualizar um genero pelo seu id
     this.router.put("/sala/:id", this.controller.update);
 
     // Deleta um genero pelo seu id
     this.router.delete("/sala/:id", this.controller.delete);
 
     // Deleta todos os generos
     //this.router.delete("/salas/", this.controller.deleteAll);
  }
}

export default new AutorizacaoRoutes().router;