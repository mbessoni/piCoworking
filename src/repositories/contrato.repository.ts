import { AppDataSource } from "../db/data-source";
import { Contrato } from "../models/contrato";

class ContratoRepository {
  contratosDB = AppDataSource.getRepository(Contrato);

  async save(contrato: Contrato): Promise<Contrato> {
      try {
          this.contratosDB.save(contrato);
          return contrato;
      } catch (err) {
          throw new Error("Falha ao criar o Contrato!");
      }
  }

  async retrieveAll(): Promise<Array<Contrato>> {
      try {
          return this.contratosDB.find();
      } catch (error) {
          throw new Error("Falha ao retornar os contrato!");
      }
  }

  async retrieveById(contratoId: number): Promise<Contrato | null> {
      try {
        var contratoEncontrado = this.contratosDB.findOneBy({
            idContrato :contratoId,
        });
        if (contratoEncontrado) {
            return contratoEncontrado;
        }
          return null;
      } catch (error) {
          throw new Error("Falha ao buscar o Contrato!");
      }
  }

  async update(contrato: Contrato): Promise<number> {
      const { idContrato, dataInicio, dataFinal, dataAlteracao, valor, horaSR ,horaSC, qtdBaias,salaTrab, testemunha} = contrato;
      try {
          this.contratosDB.save(contrato)
            return 1;
      } catch (error) {
          throw new Error("Falha ao atualizar o Contrato!");
      }
  }

  async delete(contratoId: number): Promise<number> {
      try {
        var contratoEncontrado = await this.contratosDB.findOneBy({
            idContrato: contratoId,
        });
        if (contratoEncontrado) {
            this.contratosDB.remove(contratoEncontrado);
            return 1;
        }
        return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o Contrato!");
      }
  }
/*
  async deleteAll(): Promise<number> {
      try {
          let num = this.contratosDB.length;
          this.contratosDB.splice(0, this.contratosDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os Contrato!");
      }
  }
*/
}

export default new ContratoRepository();

