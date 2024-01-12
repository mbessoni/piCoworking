import { Router } from "express";
import TelefoneController from "../controllers/telefone.controller";


class TelefoneRoutes {
  router = Router();
  controller = new TelefoneController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar uma nova telefone.
    this.router.post("/telefone", this.controller.create);

    // Retornar as telefones já cadastrados.
    this.router.get("/telefones", this.controller.findAll);

     // Retorna um telefone específico pelo seu id
     this.router.get("/telefone/:id", this.controller.findOne);

     // Atualizar um telefone pelo seu id
     this.router.put("/telefone/:id", this.controller.update);
 
     // Deleta um telefone pelo seu id
     this.router.delete("/telefone/:id", this.controller.delete);
 
     // Deleta todos os telefones
     this.router.delete("/telefones/", this.controller.deleteAll);
  }
}

export default new TelefoneRoutes().router;