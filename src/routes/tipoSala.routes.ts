import { Router } from "express";
import TipoSalaController from "../controllers/tipoSala.controller";


class TipoSalaRoutes {
  router = Router();
  controller = new TipoSalaController();

  constructor() {
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

export default new TipoSalaRoutes().router;