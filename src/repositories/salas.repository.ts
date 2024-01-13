import { AppDataSource } from "../db/data-source";
import { Salas } from "../models/salas";

class SalasRepository {
  salassDB = AppDataSource.getRepository(Salas);
  async save(salas: Salas): Promise<Salas> {
      try {
          this.salassDB.save(salas);
          return salas;
      } catch (err) {
          throw new Error("Falha ao criar o salas!");
      }
  }

  async retrieveAll(): Promise<Array<Salas>> {
      try {
          return this.salassDB.find();
      } catch (error) {
          throw new Error("Falha ao retornar os salas!");
      }
  }

  async retrieveById(salasId: number): Promise<Salas | null> {
      try {
        var salasEncontrado = this.salassDB.findOneBy({
            idSala: salasId,
        });
        if (salasEncontrado) {
            return salasEncontrado;   
        }
          return null;
      } catch (error) {
          throw new Error("Falha ao buscar o salas!");
      }
  }

  async update(salas: Salas): Promise<number> {
      const { idSala, nome , qtdPessoas, tipoSala, statusSala , obs } = salas;
      try {
          this.salassDB.save(salas)
          return 1;
      } catch (error) {
          throw new Error("Falha ao atualizar as salas!");
      }
  }

  async delete(salasId: number): Promise<number> {
      try {
        var salasEncontrado = await this.salassDB.findOneBy({
            idSala: salasId,
        });
        if (salasEncontrado) {
            this.salassDB.remove(salasEncontrado);
            return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o salas!");
      }
  }
/*
  async deleteAll(): Promise<number> {
      try {
          let num = this.salassDB.length;
          this.salassDB.splice(0, this.salassDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os salas!");
      }
  }
*/
}

export default new SalasRepository();