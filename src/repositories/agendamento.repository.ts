import { Agendamento } from "../models/agendamento";

class AgendamentoRepository {
  agendamentosDB = new Array<Agendamento>();

  async save(agendamento: Agendamento): Promise<Agendamento> {
      try {
          this.agendamentosDB.push(agendamento);
          return agendamento;
      } catch (err) {
          throw new Error("Falha ao criar o agendamento!");
      }
  }

  async retrieveAll(): Promise<Array<Agendamento>> {
      try {
          return this.agendamentosDB;
      } catch (error) {
          throw new Error("Falha ao retornar os agendamento!");
      }
  }

  async retrieveById(agendamentoId: number): Promise<Agendamento | null> {
      try {
          var encontrado = false;
          var agendamentoEncontrado = null;
          this.agendamentosDB.forEach(element => {
              if (element.idAgendamento == agendamentoId) {
                  agendamentoEncontrado = element;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return agendamentoEncontrado;
          }
          return null;
      } catch (error) {
          throw new Error("Falha ao buscar o agendamento!");
      }
  }

  async update(agendamento: Agendamento): Promise<number> {
      const { idAgendamento, horaInicio, horaFim, data, salaTrab, autorizacao, login, dataRequisicao, dataAlteracao  } = agendamento;
      try {
          var encontrado = false;
          this.agendamentosDB.forEach(element => {
              if (element.idAgendamento == agendamento.idAgendamento) {
                  element.horaInicio = agendamento.horaInicio;
                  element.horaFim = agendamento.horaFim;
                  element.data = agendamento.data;
                  element.salaTrab = agendamento.salaTrab;
                  element.autorizacao = agendamento.autorizacao;
                  element.login = agendamento.login;
                  element.dataRequisicao = agendamento.dataRequisicao;
                  element.dataAlteracao = agendamento.dataAlteracao;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao atualizar o agendamento!");
      }
  }

  async delete(agendamentoId: number): Promise<number> {
      try {
          var encontrado = false;
          this.agendamentosDB.forEach(element => {
              if (element.idAgendamento == agendamentoId) {
                  this.agendamentosDB.splice(this.agendamentosDB.indexOf(element), 1);
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o agendamento!");
      }
  }

  async deleteAll(): Promise<number> {
      try {
          let num = this.agendamentosDB.length;
          this.agendamentosDB.splice(0, this.agendamentosDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os agendamentos!");
      }
  }

}

export default new AgendamentoRepository();
