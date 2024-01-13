import { AppDataSource } from "../db/data-source";
import { Autorizacao } from "../models/autorizacao";

class AutorizacaoRepository {
  autorizacaoDB = AppDataSource.getRepository(Autorizacao);

  async save(autorizacao: Autorizacao): Promise<Autorizacao> {
      try {
          this.autorizacaoDB.save(autorizacao);
          return autorizacao;
      } catch (err) {
          throw new Error("Falha ao criar a autorizacao!");
      }
  }

  async retrieveAll(): Promise<Array<Autorizacao>> {
      try {
          return this.autorizacaoDB.find();
      } catch (error) {
          throw new Error("Falha ao retornar as autorizacões!");
      }
  }

  async retrieveById(autorizacaoId: number): Promise<Autorizacao | null> {
      try {
        var autorizacaoEncontrado = this.autorizacaoDB.findOneBy({
            idAutorizacao : autorizacaoId,
        });
        if (autorizacaoEncontrado) {
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
        this.autorizacaoDB.save(autorizacao)
        return 1;    
      } catch (error) {
          throw new Error("Falha ao atualizar a autorizacao!");
      }
  }

  async delete(autorizacaoId: number): Promise<number> {
      try {
        var autorizacaoEncontrado = await this.autorizacaoDB.findOneBy({
            idAutorizacao : autorizacaoId,
        });
        if (autorizacaoEncontrado) {
            this.autorizacaoDB.remove(autorizacaoEncontrado);
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar a autorizacao!");
      }
  }
/*
  async deleteAll(): Promise<number> {
      try {
          let num = this.autorizacaoDB.length;
          this.autorizacaoDB.splice(0, this.autorizacaoDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todas as autorizacões!");
      }
  }
*/
}

export default new AutorizacaoRepository();
