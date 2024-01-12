import { ClientePJ } from "../models/clientePJ";


class ClientePJRepository {
  clientesPJDB = new Array<ClientePJ>();

  async save(clientePJ: ClientePJ): Promise<ClientePJ> {
      try {
          this.clientesPJDB.push(clientePJ);
          return clientePJ;
      } catch (err) {
          throw new Error("Falha ao criar o ClientePJ!");
      }
  }

  async retrieveAll(): Promise<Array<ClientePJ>> {
      try {
          return this.clientesPJDB;
      } catch (error) {
          throw new Error("Falha ao retornar os ClientePJ!");
      }
  }

  async retrieveById(clientePJId: number): Promise<ClientePJ | null> {
      try {
          var encontrado = false;
          var clientePJEncontrado = null;
          this.clientesPJDB.forEach(element => {
              if (element.cnpj == clientePJId) {
                  clientePJEncontrado = element;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return clientePJEncontrado;
          }
          return null;
      } catch (error) {
          throw new Error("Falha ao buscar o ClientePJ!");
      }
  }

  /*
  async update(clientePJ: ClientePJ): Promise<number> {
      const { id, nome , emails, telefones , endereco, contrato, status , dataCadastro, dataAlteracao, cnpj, razaoSocial} = clientePJ;
      try {
          var encontrado = false;
          this.clientesPJDB.forEach(element => {
              if (element.id == clientePJ.id) {
                  element.nome = clientePJ.nome;
                  element.emails = clientePJ.emails;
                  element.telefones = clientePJ.telefones;
                  element.endereco = clientePJ.endereco;
                  element.contrato = clientePJ.contrato;
                  element.status = clientePJ.status;
                  element.dataCadastro = clientePJ.dataCadastro;
                  element.dataAlteracao = clientePJ.dataAlteracao;
                  element.cnpj = clientePJ.cnpj;
                  element.razaoSocial = clientePJ.razaoSocial;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao atualizar o ClientePJ!");
      }
  }

  */

  async update(clientePJ: ClientePJ): Promise<number> {
    const { cnpj, razaoSocial, nomeFantasia, dataFundacao} = clientePJ;
    try {
        var encontrado = false;
        this.clientesPJDB.forEach(element => {
            if (element.cnpj == clientePJ.cnpj) {
                element.cnpj = clientePJ.cnpj;
                element.razaoSocial = clientePJ.razaoSocial;
                element.nomeFantasia = clientePJ.nomeFantasia;
                element.dataFundacao = dataFundacao ;
                encontrado = true;
            }
        });
        if (encontrado) {
            return 1;
        }
        return 0;
    } catch (error) {
        throw new Error("Falha ao atualizar o ClientePJ!");
    }
}


  async delete(clientePJId: number): Promise<number> {
      try {
          var encontrado = false;
          this.clientesPJDB.forEach(element => {
              if (element.cnpj == clientePJId) {
                  this.clientesPJDB.splice(this.clientesPJDB.indexOf(element), 1);
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o ClientePJ!");
      }
  }

  async deleteAll(): Promise<number> {
      try {
          let num = this.clientesPJDB.length;
          this.clientesPJDB.splice(0, this.clientesPJDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os ClientePJ!");
      }
  }

}

export default new ClientePJRepository();

