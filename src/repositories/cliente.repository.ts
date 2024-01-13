import { AppDataSource } from "../db/data-source";
import { Cliente } from "../models/cliente";

class ClienteRepository {
    clientesDB = AppDataSource.getRepository(Cliente);

    async save(cliente: Cliente): Promise<Cliente> {
        try {
            this.clientesDB.save(cliente);
            return cliente;
        } catch (err) {
            throw new Error("Falha ao criar o Cliente!");
        }
    }

    async retrieveAll(): Promise<Array<Cliente>> {
        try {
            return this.clientesDB.find();
        } catch (error) {
            throw new Error("Falha ao retornar os Cliente!");
        }
    }

    async retrieveById(clienteId: number): Promise<Cliente | null> {
        try {
            var clienteEncontrado = this.clientesDB.findOneBy({
                idCliente : clienteId,
            });
            if (clienteEncontrado) {
                return clienteEncontrado;
            }
            return null;
        } catch (error) {
            throw new Error("Falha ao buscar o Cliente!");
        }
    }

    /*
    async update(cliente: Cliente): Promise<number> {
        const { idCliente, nome , emails, telefones , endereco, contrato, status , dataCadastro, dataAlteracao} = cliente;
        try {
            var encontrado = false;
            this.clientesDB.forEach(element => {
                if (element.idCliente == cliente.idCliente) {
                    element.nome = cliente.nome;
                    element.emails = cliente.emails;
                    element.telefones = cliente.telefones;
                    element.endereco = cliente.endereco;
                    element.contrato = cliente.contrato;
                    element.status = cliente.status;
                    element.dataCadastro = cliente.dataCadastro;
                    element.dataAlteracao = cliente.dataAlteracao;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao atualizar o cliente!");
        }
    }
    */

    async update(cliente: Cliente): Promise<number> {
        const { idCliente, endereco, contrato, } = cliente;
        try {
            this.clientesDB.save(cliente)
            return 1;
        } catch (error) {
            throw new Error("Falha ao atualizar o cliente!");
        }
    }

    async delete(clienteId: number): Promise<number> {
        try {
            var clienteEncontrado = await this.clientesDB.findOneBy({
                idCliente: clienteId,
            });
            if (clienteEncontrado) {
                this.clientesDB.remove(clienteEncontrado);
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
            let num = this.clientesDB.length;
            this.clientesDB.splice(0, this.clientesDB.length);
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os Cliente!");
        }
    }
*/
}

export default new ClienteRepository();

