import { AppDataSource } from "../db/data-source";
import { Agendamento } from "../models/agendamento";

class AgendamentoRepository {
  agendamentosDB = AppDataSource.getRepository(Agendamento);

  async save(agendamento: Agendamento): Promise<Agendamento> {
      try {
          this.agendamentosDB.save(agendamento);
          return agendamento;
      } catch (err) {
          throw new Error("Falha ao criar o agendamento!");
      }
  }

  async retrieveAll(): Promise<Array<Agendamento>> {
      try {
          return this.agendamentosDB.find();
      } catch (error) {
          throw new Error("Falha ao retornar os agendamento!");
      }
  }

  async retrieveById(agendamentoId: number): Promise<Agendamento | null> {
      try {
          var encontrado = this.agendamentosDB.findOneBy({
            idAgendamento: agendamentoId,
          });
          
          if (encontrado) {
              return encontrado;
          }
          return null;
      } catch (error) {
          throw new Error("Falha ao buscar o agendamento!");
      }
  }

  /* async update(genero: Genero) {
    const { idGenero, nome } = genero;
    try {
        this.generoRepository.save(genero);
    } catch (error) {
        throw new Error("Falha ao atualizar o gênero!");
    }
}
 */


  async update(agendamento: Agendamento){
      const { idAgendamento, horaInicio, horaFim, data, salaTrab, autorizacao, 
            login, dataRequisicao, dataAlteracao  } = agendamento;
      try {
          this.agendamentosDB.save(agendamento);
              return 1;
          }
          catch (error) {
          throw new Error("Falha ao atualizar o agendamento!");
      }
  }

  async delete(agendamentoId: number): Promise<number> {
      try {
          var encontrado = await this.agendamentosDB.findOneBy({
            idAgendamento: agendamentoId,
        });
          if (encontrado) {
            this.agendamentosDB.remove(encontrado);
            return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o agendamento!");
      }
  }

  /* async deleteAll(): Promise<number> {
      try {
          let num = this.agendamentosDB.length;
          this.agendamentosDB.splice(0, this.agendamentosDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os agendamentos!");
      }
  } */

}

export default new AgendamentoRepository();
