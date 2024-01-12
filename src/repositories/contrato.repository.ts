import { Contrato } from "../models/Contrato";

class ContratoRepository {
  contratosDB = new Array<Contrato>();

  async save(contrato: Contrato): Promise<Contrato> {
      try {
          this.contratosDB.push(contrato);
          return contrato;
      } catch (err) {
          throw new Error("Falha ao criar o Contrato!");
      }
  }

  async retrieveAll(): Promise<Array<Contrato>> {
      try {
          return this.contratosDB;
      } catch (error) {
          throw new Error("Falha ao retornar os contrato!");
      }
  }

  async retrieveById(contratoId: number): Promise<Contrato | null> {
      try {
          var encontrado = false;
          var contratoEncontrado = null;
          this.contratosDB.forEach(element => {
              if (element.idContrato == contratoId) {
                  contratoEncontrado = element;
                  encontrado = true;
              }
          });
          if (encontrado) {
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
          var encontrado = false;
          this.contratosDB.forEach(element => {
              if (element.idContrato == contrato.idContrato) {
                  element.dataInicio = contrato.dataInicio;
                  element.dataFinal = contrato.dataFinal;
                  //element.dataCadastro = contrato.dataCadastro;
                  element.dataAlteracao = contrato.dataAlteracao;
                  element.valor = contrato.valor;
                  element.horaSR = contrato.horaSR;
                  element.horaSC = contrato.horaSC;
                  element.qtdBaias = contrato.qtdBaias;
                  element.salaTrab = contrato.salaTrab;
                  element.testemunha = contrato.testemunha;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao atualizar o Contrato!");
      }
  }

  async delete(contratoId: number): Promise<number> {
      try {
          var encontrado = false;
          this.contratosDB.forEach(element => {
              if (element.idContrato == contratoId) {
                  this.contratosDB.splice(this.contratosDB.indexOf(element), 1);
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o Contrato!");
      }
  }

  async deleteAll(): Promise<number> {
      try {
          let num = this.contratosDB.length;
          this.contratosDB.splice(0, this.contratosDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os Contrato!");
      }
  }

}

export default new ContratoRepository();

