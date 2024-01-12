import { Router } from "express";
import ClientePJController from "../controllers/clientePJ.controller";


class ClientePJRoutes {
  router = Router();
  controller = new ClientePJController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo clientePJ.
    this.router.post("/clientePJ", this.controller.create);

    // Retornar os clientesPJ já cadastrados.
    this.router.get("/clientesPJ", this.controller.findAll);

     // Retorna um clientePJ específico pelo seu id
     this.router.get("/clientePJ/:id", this.controller.findOne);

     // Atualizar um clientePJ pelo seu id
     this.router.put("/clientePJ/:id", this.controller.update);
 
     // Deleta um clientePJ pelo seu id
     this.router.delete("/clientePJ/:id", this.controller.delete);
 
     // Deleta todos os clientesPJ
     //this.router.delete("/clientesPJ/", this.controller.deleteAll);
  }
}

export default new ClientePJRoutes().router;