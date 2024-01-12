import { Autorizacao } from "../models/autorizacao";

class AutorizacaoRepository {
  autorizacaoDB = new Array<Autorizacao>();

  async save(autorizacao: Autorizacao): Promise<Autorizacao> {
      try {
          this.autorizacaoDB.push(autorizacao);
          return autorizacao;
      } catch (err) {
          throw new Error("Falha ao criar a autorizacao!");
      }
  }

  async retrieveAll(): Promise<Array<Autorizacao>> {
      try {
          return this.autorizacaoDB;
      } catch (error) {
          throw new Error("Falha ao retornar as autorizacões!");
      }
  }

  async retrieveById(autorizacaoId: number): Promise<Autorizacao | null> {
      try {
          var encontrado = false;
          var autorizacaoEncontrado = null;
          this.autorizacaoDB.forEach(element => {
              if (element.idAutorizacao == autorizacaoId) {
                  autorizacaoEncontrado = element;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return autorizacaoEncontrado;
          }
          return null;
      } catch (error) {
          throw new Error("Falha ao buscar a autorizacao!");
      }
  }

  async update(autorizacao: Autorizacao): Promise<number> {
      const { idAutorizacao, tipo, obs, funcionario  } = autorizacao;
      try {
          var encontrado = false;
          this.autorizacaoDB.forEach(element => {
              if (element.idAutorizacao == autorizacao.idAutorizacao) {
                  element.tipo = autorizacao.tipo;
                  element.obs = autorizacao.obs;
                  element.funcionario = autorizacao.funcionario;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao atualizar a autorizacao!");
      }
  }

  async delete(autorizacaoId: number): Promise<number> {
      try {
          var encontrado = false;
          this.autorizacaoDB.forEach(element => {
              if (element.idAutorizacao == autorizacaoId) {
                  this.autorizacaoDB.splice(this.autorizacaoDB.indexOf(element), 1);
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar a autorizacao!");
      }
  }

  async deleteAll(): Promise<number> {
      try {
          let num = this.autorizacaoDB.length;
          this.autorizacaoDB.splice(0, this.autorizacaoDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todas as autorizacões!");
      }
  }

}

export default new AutorizacaoRepository();
