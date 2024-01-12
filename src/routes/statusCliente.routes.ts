import { Router } from "express";
import StatusClienteController from "../controllers/statusCliente.controller";


class StatusClienteRoutes {
  router = Router();
  controller = new StatusClienteController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo statusCliente.
    this.router.post("/statusCliente", this.controller.create);

    // Retornar os statusClientes já cadastrados.
    this.router.get("/statusClientes", this.controller.findAll);

     // Retorna um statusCliente específico pelo seu id
     this.router.get("/statusCliente/:id", this.controller.findOne);

     // Atualizar um statusCliente pelo seu id
     this.router.put("/statusCliente/:id", this.controller.update);
 
     // Deleta um statusCliente pelo seu id
     this.router.delete("/statusCliente/:id", this.controller.delete);
  }
}

export default new StatusClienteRoutes().router;