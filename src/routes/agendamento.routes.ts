import { Router } from "express";
import AGENDAMENTOController from "../controllers/agendamento.controller";


class AgendamentoRoutes {
  router = Router();
  controller = new AGENDAMENTOController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar uma novo Agendamento.
    this.router.post("/agendamento", this.controller.create);

    // Retornar os agendamentos já cadastrados.
    this.router.get("/agendamentos", this.controller.findAll);

     // Retorna um agendamento específico pelo seu id
     this.router.get("/agendamento/:id", this.controller.findOne);

     // Atualizar um agendamento pelo seu id
     this.router.put("/agendamento/:id", this.controller.update);
 
     // Deleta um agndamento pelo seu id
     this.router.delete("/agendamento/:id", this.controller.delete);
 
     // Deleta todos os agendamentos
     //this.router.delete("/agendamentos/", this.controller.deleteAll);
  }
}

export default new AgendamentoRoutes().router;