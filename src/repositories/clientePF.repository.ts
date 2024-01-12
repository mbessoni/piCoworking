import { ClientePF } from "../models/clientePF";

class ClientePFRepository {
  clientesPFDB = new Array<ClientePF>();

  async save(clientePF: ClientePF): Promise<ClientePF> {
      try {
          this.clientesPFDB.push(clientePF);
          return clientePF;
      } catch (err) {
          throw new Error("Falha ao criar o ClientePF!");
      }
  }

  async retrieveAll(): Promise<Array<ClientePF>> {
      try {
          return this.clientesPFDB;
      } catch (error) {
          throw new Error("Falha ao retornar os ClientePF!");
      }
  }

  async retrieveById(clientePFId: number): Promise<ClientePF | null> {
      try {
          var encontrado = false;
          var clientePFEncontrado = null;
          this.clientesPFDB.forEach(element => {
              if (element.cpf == clientePFId) {
                  clientePFEncontrado = element;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return clientePFEncontrado;
          }
          return null;
      } catch (error) {
          throw new Error("Falha ao buscar o ClientePF!");
      }
  }
 /*
  async update(clientePF: ClientePF): Promise<number> {
      const { id, nome , emails, telefones , endereco, contrato, status , dataCadastro, dataAlteracao, cpf} = clientePF;
      try {
          var encontrado = false;
          this.clientesPFDB.forEach(element => {
              if (element.id == clientePF.id) {
                  element.nome = clientePF.nome;
                  element.emails = clientePF.emails;
                  element.telefones = clientePF.telefones;
                  element.endereco = clientePF.endereco;
                  element.contrato = clientePF.contrato;
                  element.status = clientePF.status;
                  element.dataCadastro = clientePF.dataCadastro;
                  element.dataAlteracao = clientePF.dataAlteracao;
                  element.cpf = clientePF.cpf;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao atualizar o ClientePF!");
      }
  }

  */

  async update(clientePF: ClientePF): Promise<number> {
    const { nome ,  cpf} = clientePF;
    try {
        var encontrado = false;
        this.clientesPFDB.forEach(element => {
            if (element.cpf == clientePF.cpf) {
                element.nome = clientePF.nome;
                //element.emails = clientePF.emails;
                //element.telefones = clientePF.telefones;
                //element.endereco = clientePF.endereco;
                //element.contrato = clientePF.contrato;
                //element.status = clientePF.status;
                //element.dataCadastro = clientePF.dataCadastro;
                //element.dataAlteracao = clientePF.dataAlteracao;
                element.cpf = clientePF.cpf;
                encontrado = true;
            }
        });
        if (encontrado) {
            return 1;
        }
        return 0;
    } catch (error) {
        throw new Error("Falha ao atualizar o ClientePF!");
    }
}
  async delete(clientePF: number): Promise<number> {
      try {
          var encontrado = false;
          this.clientesPFDB.forEach(element => {
              if (element.cpf == clientePF) {
                  this.clientesPFDB.splice(this.clientesPFDB.indexOf(element), 1);
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o Cliente!");
      }
  }

  async deleteAll(): Promise<number> {
      try {
          let num = this.clientesPFDB.length;
          this.clientesPFDB.splice(0, this.clientesPFDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os Cliente!");
      }
  }

}

export default new ClientePFRepository();