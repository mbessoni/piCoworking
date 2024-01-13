import { AppDataSource } from "../db/data-source";
import { Endereco } from "../models/endereco";

class EnderecoRepository {
  enderecosDB = AppDataSource.getRepository(Endereco);

  async save(endereco: Endereco): Promise<Endereco> {
      try {
          this.enderecosDB.save(endereco);
          return endereco;
      } catch (err) {
          throw new Error("Falha ao criar o Endereco!");
      }
  }

  async retrieveAll(): Promise<Array<Endereco>> {
      try {
          return this.enderecosDB.find();
      } catch (error) {
          throw new Error("Falha ao retornar os Endereco!");
      }
  }

  async retrieveById(enderecoId: number): Promise<Endereco | null> {
      try {
        var enderecoEncontrado = this.enderecosDB.findOneBy({
            IdEndereco : enderecoId,
        });
        if (enderecoEncontrado) {
            return enderecoEncontrado;
        }
        return null;
      } catch (error) {
          throw new Error("Falha ao buscar o Endereco!");
      }
  }

  async update(endereco: Endereco): Promise<number> {
      const { IdEndereco, uf, cep, cidade, bairro, rua, numero, complemento} = endereco;
      try {
        this.enderecosDB.save(endereco);
        return 1;
      } catch (error) {
          throw new Error("Falha ao atualizar o Endereco!");
      }
  }

  async delete(enderecoId: number): Promise<number> {
      try {
        var enderecoEncontrado = await this.enderecosDB.findOneBy({
            IdEndereco : enderecoId,
        });
        if (enderecoEncontrado) {
            this.enderecosDB.remove(enderecoEncontrado);
            return 1;
        }
        return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o Endereco!");
      }
  }
/*
  async deleteAll(): Promise<number> {
      try {
          let num = this.enderecosDB.length;
          this.enderecosDB.splice(0, this.enderecosDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os Enderecos!");
      }
  }
*/
}

export default new EnderecoRepository();
