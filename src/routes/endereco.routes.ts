import { Router } from "express";
import EnderecoController from "../controllers/endereco.controller";


class EnderecoRoutes {
  router = Router();
  controller = new EnderecoController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo endereco.
    this.router.post("/endereco", this.controller.create);

    // Retornar os enderecos já cadastrados.
    this.router.get("/enderecos", this.controller.findAll);

     // Retorna um endereco específico pelo seu id
     this.router.get("/endereco/:id", this.controller.findOne);

     // Atualizar um endereco pelo seu id
     this.router.put("/endereco/:id", this.controller.update);
 
     // Deleta um endereco pelo seu id
     this.router.delete("/endereco/:id", this.controller.delete);
 
     // Deleta todos os enderecos
     //this.router.delete("/enderecos/", this.controller.deleteAll);
  }
}

export default new EnderecoRoutes().router;