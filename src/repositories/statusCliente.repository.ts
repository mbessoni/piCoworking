import { AppDataSource } from "../db/data-source";
import { StatusCliente } from "../models/statusCliente";

class StatusClienteRepository {
  statusCliDB = AppDataSource.getRepository(StatusCliente);
  async save(status: StatusCliente): Promise<StatusCliente> {
      try {
          this.statusCliDB.save(status);
          return status;
      } catch (err) {
          throw new Error("Falha ao criar o StatusCliente!");
      }
  }

  async retrieveAll(): Promise<Array<StatusCliente>> {
      try {
          return this.statusCliDB.find();
      } catch (error) {
          throw new Error("Falha ao retornar os StatusCliente!");
      }
  }

  async retrieveById(statusId: number): Promise<StatusCliente | null> {
    try {
        var statusEncontrado = this.statusCliDB.findOneBy({
            idStatusCliente: statusId,
        });
        if (statusEncontrado) {
            return statusEncontrado;
        } 
        return null;         
    } catch (error) {
        throw new Error("Falha ao buscar o StatusCliente!");
    }
}

// repensar, acredito que não precisa de retorno.
  async update(status: StatusCliente): Promise<number> {
      const { idStatusCliente, tipo } = status;
      try {
        this.statusCliDB.save(status);
        return 1;
      } catch (error) {
          throw new Error("Falha ao atualizar o StatusCliente!");
      }
  }

  async delete(statusId: number): Promise<number> {
      try {
        var statusEncontrado = await this.statusCliDB.findOneBy({
            idStatusCliente: statusId,
        });
        if (statusEncontrado) {
            this.statusCliDB.remove(statusEncontrado);
            return 1;
        } 
        return 0;
      } catch (error) {
        throw new Error("Falha ao deletar o StatusCliente!");
      }
  }

}

export default new StatusClienteRepository();

