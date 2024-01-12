import { Router } from "express";
import LoginController from "../controllers/login.controller";


class LoginRoutes {
  router = Router();
  controller = new LoginController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar uma nova login.
    this.router.post("/login", this.controller.create);

    // Retornar os logins já cadastrados.
    this.router.get("/logins", this.controller.findAll);

     // Retorna um login específico pelo seu id
     this.router.get("/login/:id", this.controller.findOne);

     // Atualizar um login pelo seu id
     this.router.put("/login/:id", this.controller.update);
 
     // Deleta uma login pelo seu id
     this.router.delete("/login/:id", this.controller.delete);
 
     // Deleta todos os logins
     //this.router.delete("/logins/", this.controller.deleteAll);
  }
}

export default new LoginRoutes().router;