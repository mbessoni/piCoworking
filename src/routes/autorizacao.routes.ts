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
    this.router.post("/autorizacao", this.controller.create);

    // Retornar as salas já cadastrados.
    this.router.get("/autorizacoes", this.controller.findAll);

     // Retorna um genero específico pelo seu id
     this.router.get("/autorizacao/:id", this.controller.findOne);

     // Atualizar um genero pelo seu id
     this.router.put("/autorizacao/:id", this.controller.update);
 
     // Deleta um genero pelo seu id
     this.router.delete("/autorizacao/:id", this.controller.delete);
 
     // Deleta todos os generos
     //this.router.delete("/salas/", this.controller.deleteAll);
  }
}

export default new AutorizacaoRoutes().router;