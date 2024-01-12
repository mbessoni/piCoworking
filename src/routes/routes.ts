import { Application } from "express";
import homeRoutes from "./home.routes";
import clienteRoutes from "./cliente.routes";
import telefoneRoutes from "./telefone.routes";
import emailRoutes from "./email.routes";
import agendamentoRoutes from "./agendamento.routes";
import autorizacaoRoutes from "./autorizacao.routes";
import clientePFRoutes from "./clientePF.routes";
import clientePJRoutes from "./clientePJ.routes";
import contratoRoutes from "./contrato.routes";
import enderecoRoutes from "./endereco.routes";
import funcionarioRoutes from "./funcionario.routes";
import loginRoutes from "./login.routes";
import salaRoutes from "./sala.routes";
import statusClienteRoutes from "./statusCliente.routes";
import statusSalaRoutes from "./statusSala.routes";
import testemunhaRoutes from "./testemunha.routes";
import tipoSalaRoutes from "./tipoSala.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/coworking", homeRoutes);
    app.use("/coworking", clienteRoutes);
    app.use("/coworking", telefoneRoutes);
    app.use("/coworking", emailRoutes);
    app.use("/coworking", agendamentoRoutes);
    app.use("/coworking", autorizacaoRoutes);
    app.use("/coworking", clientePFRoutes);
    app.use("/coworking", clientePJRoutes);
    app.use("/coworking", contratoRoutes);
    app.use("/coworking", enderecoRoutes);
    app.use("/coworking", funcionarioRoutes);
    app.use("/coworking", loginRoutes);
    app.use("/coworking", salaRoutes);
    app.use("/coworking", statusClienteRoutes);
    app.use("/coworking", statusSalaRoutes);
    app.use("/coworking", testemunhaRoutes);
    app.use("/coworking", tipoSalaRoutes);

  }
}