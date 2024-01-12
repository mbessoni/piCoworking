import { Router } from "express";
import ClientePFController from "../controllers/clientePF.controller";


class ClientePFRoutes {
  router = Router();
  controller = new ClientePFController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo clientePF.
    this.router.post("/clientePF", this.controller.create);

    // Retornar os clientesPF já cadastrados.
    this.router.get("/clientesPF", this.controller.findAll);

     // Retorna um clientePF específico pelo seu id
     this.router.get("/clientePF/:id", this.controller.findOne);

     // Atualizar um clientePF pelo seu id
     this.router.put("/clientePF/:id", this.controller.update);
 
     // Deleta um clientePF pelo seu id
     this.router.delete("/clientePF/:id", this.controller.delete);
 
     // Deleta todos os clientesPF
     //this.router.delete("/clientesPF/", this.controller.deleteAll);
  }
}

export default new ClientePFRoutes().router;