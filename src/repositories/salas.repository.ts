import { Salas } from "../models/Salas";

class SalasRepository {
  salassDB = new Array<Salas>();

  async save(salas: Salas): Promise<Salas> {
      try {
          this.salassDB.push(salas);
          return salas;
      } catch (err) {
          throw new Error("Falha ao criar o salas!");
      }
  }

  async retrieveAll(): Promise<Array<Salas>> {
      try {
          return this.salassDB;
      } catch (error) {
          throw new Error("Falha ao retornar os salas!");
      }
  }

  async retrieveById(salasId: number): Promise<Salas | null> {
      try {
          var encontrado = false;
          var salasEncontrado = null;
          this.salassDB.forEach(element => {
              if (element.idSala == salasId) {
                  salasEncontrado = element;
                  encontrado = true;
              }
          });
          if (encontrado) {
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
          var encontrado = false;
          this.salassDB.forEach(element => {
              if (element.idSala == salas.idSala) {
                  element.nome = salas.nome;
                  element.qtdPessoas = salas.qtdPessoas;
                  element.tipoSala = salas.tipoSala;
                  element.statusSala = salas.statusSala;
                  element.obs = salas.obs;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao atualizar as salas!");
      }
  }

  async delete(salasId: number): Promise<number> {
      try {
          var encontrado = false;
          this.salassDB.forEach(element => {
              if (element.idSala == salasId) {
                  this.salassDB.splice(this.salassDB.indexOf(element), 1);
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o salas!");
      }
  }

  async deleteAll(): Promise<number> {
      try {
          let num = this.salassDB.length;
          this.salassDB.splice(0, this.salassDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os salas!");
      }
  }

}

export default new SalasRepository();