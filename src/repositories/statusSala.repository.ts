import { AppDataSource } from "../db/data-source";
import { StatusSala } from "../models/statusSala";

class StatusSalaRepository {
  statusesDB = AppDataSource.getRepository(StatusSala);

  async save(status: StatusSala): Promise<StatusSala> {
      try {
          this.statusesDB.save(status);
          return status;
      } catch (err) {
          throw new Error("Falha ao criar o StatusSala!");
      }
  }

  async retrieveAll(): Promise<Array<StatusSala>> {
      try {
          return this.statusesDB.find();
      } catch (error) {
          throw new Error("Falha ao retornar os StatusSala!");
      }
  }

  async retrieveById(statusId: number): Promise<StatusSala | null> {
    try {
        var statusEncontrado = this.statusesDB.findOneBy({
            idStatus: statusId,
        })         
        if (statusEncontrado) {
            return statusEncontrado;
        }
        return null;         
    } catch (error) {
        throw new Error("Falha ao buscar o StatusSala!");
    }
}


  async update(statusSalas: StatusSala): Promise<number> {
      const { idStatus, tipo } = statusSalas;
      try {
          this.statusesDB.save(statusSalas);
          return 1;
      } catch (error) {
          throw new Error("Falha ao atualizar o statusSala!");
      }
  }

  async delete(statusId: number): Promise<number> {
      try {
        var statusEncontrado = await this.statusesDB.findOneBy({
            idStatus : statusId,
        });
        if (statusEncontrado) {
            this.statusesDB.remove(statusEncontrado);
            return 1;
        }
        return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o statusSala!");
      }
  }
/*
  async deleteAll(): Promise<number> {
      try {
          let num = this.statusesDB.length;
          this.statusesDB.splice(0, this.statusesDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os statusSala!");
      }
  }
*/
}

export default new StatusSalaRepository();
