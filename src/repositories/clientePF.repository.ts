import { AppDataSource } from "../db/data-source";
import { ClientePF } from "../models/clientePF";

class ClientePFRepository {
  clientesPFDB = AppDataSource.getRepository(ClientePF);
  async save(clientePF: ClientePF): Promise<ClientePF> {
      try {
          this.clientesPFDB.save(clientePF);
          return clientePF;
      } catch (err) {
          throw new Error("Falha ao criar o ClientePF!");
      }
  }

  async retrieveAll(): Promise<Array<ClientePF>> {
      try {
          return this.clientesPFDB.find();
      } catch (error) {
          throw new Error("Falha ao retornar os ClientePF!");
      }
  }

  async retrieveById(clientePFCpf: number): Promise<ClientePF | null> {
      try {
        var clientePFEncontrado = this.clientesPFDB.findOneBy({
            cpf: clientePFCpf,
        });
        if (clientePFEncontrado) {
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
        this.clientesPFDB.save(clientePF)
        return 1;
    } catch (error) {
        throw new Error("Falha ao atualizar o ClientePF!");
    }
}
  async delete(clientePFCpf: number): Promise<number> {
      try {
        var clientePFEncontrado = await this.clientesPFDB.findOneBy({
            cpf : clientePFCpf,
        });
        if (clientePFEncontrado) {
            this.clientesPFDB.remove(clientePFEncontrado);
            return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o Cliente!");
      }
  }
/*
  async deleteAll(): Promise<number> {
      try {
          let num = this.clientesPFDB.length;
          this.clientesPFDB.splice(0, this.clientesPFDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os Cliente!");
      }
  }
*/
}

export default new ClientePFRepository();