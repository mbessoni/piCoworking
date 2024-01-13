import { Endereco } from "../models/endereco";

class EnderecoRepository {
  enderecosDB = new Array<Endereco>();

  async save(endereco: Endereco): Promise<Endereco> {
      try {
          this.enderecosDB.push(endereco);
          return endereco;
      } catch (err) {
          throw new Error("Falha ao criar o Endereco!");
      }
  }

  async retrieveAll(): Promise<Array<Endereco>> {
      try {
          return this.enderecosDB;
      } catch (error) {
          throw new Error("Falha ao retornar os Endereco!");
      }
  }

  async retrieveById(enderecoId: number): Promise<Endereco | null> {
      try {
          var encontrado = false;
          var enderecoEncontrado = null;
          this.enderecosDB.forEach(element => {
              if (element.IdEndereco == enderecoId) {
                  enderecoEncontrado = element;
                  encontrado = true;
              }
          });
          if (encontrado) {
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
          var encontrado = false;
          this.enderecosDB.forEach(element => {
              if (element.IdEndereco == endereco.IdEndereco) {
                  element.uf = endereco.uf;
                  element.cep = endereco.cep;
                  element.cidade = endereco.cidade;
                  element.bairro = endereco.bairro;
                  element.rua = endereco.rua;
                  element.numero = endereco.numero;
                  element.complemento = endereco.complemento;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao atualizar o Endereco!");
      }
  }

  async delete(enderecoId: number): Promise<number> {
      try {
          var encontrado = false;
          this.enderecosDB.forEach(element => {
              if (element.IdEndereco == enderecoId) {
                  this.enderecosDB.splice(this.enderecosDB.indexOf(element), 1);
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o Endereco!");
      }
  }

  async deleteAll(): Promise<number> {
      try {
          let num = this.enderecosDB.length;
          this.enderecosDB.splice(0, this.enderecosDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os Enderecos!");
      }
  }

}

export default new EnderecoRepository();
