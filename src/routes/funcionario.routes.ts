import { Router } from "express";
import FuncionarioController from "../controllers/funcionario.controller";


class FuncionarioRoutes {
  router = Router();
  controller = new FuncionarioController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo funcionario.
    this.router.post("/funcionario", this.controller.create);

    // Retornar os funcionarios já cadastrados.
    this.router.get("/funcionarios", this.controller.findAll);

     // Retorna um funcionario específico pelo seu id
     this.router.get("/funcionario/:id", this.controller.findOne);

     // Atualizar um funcionario pelo seu id
     this.router.put("/funcionario/:id", this.controller.update);
 
     // Deleta um funcionario pelo seu id
     this.router.delete("/funcionario/:id", this.controller.delete);
 
     // Deleta todos os funcionarios
     //this.router.delete("/funcionarios/", this.controller.deleteAll);
  }
}

export default new FuncionarioRoutes().router;