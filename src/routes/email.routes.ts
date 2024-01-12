import { Router } from "express";
import EmailController from "../controllers/email.controller";


class EmailRoutes {
  router = Router();
  controller = new EmailController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo email.
    this.router.post("/email", this.controller.create);

    // Retornar os emails já cadastrados.
    this.router.get("/emails", this.controller.findAll);

     // Retorna um email específico pelo seu id
     this.router.get("/email/:id", this.controller.findOne);

     // Atualizar um email pelo seu id
     this.router.put("/email/:id", this.controller.update);
 
     // Deleta um email pelo seu id
     this.router.delete("/email/:id", this.controller.delete);
 
     // Deleta todos os emails
     //this.router.delete("/emails/", this.controller.deleteAll);
  }
}

export default new EmailRoutes().router;