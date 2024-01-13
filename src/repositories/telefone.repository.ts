import { AppDataSource } from "../db/data-source";
import { Telefone } from "../models/telefone";

class TelefoneRepository {
    telefonesDB = AppDataSource.getRepository(Telefone);
    async save(telefone: Telefone): Promise<Telefone> {
        try {
            this.telefonesDB.save(telefone);
            return telefone;
        } catch (err) {
            throw new Error("Falha ao criar o Telefone!");
        }
    }

    async retrieveAll(): Promise<Array<Telefone>> {
        try {
            return this.telefonesDB.find();
        } catch (error) {
            throw new Error("Falha ao retornar os Telefones!");
        }
    }

    async retrieveById(telefoneId: number): Promise<Telefone | null> {
        try {
            var telefoneEncontrado = this.telefonesDB.findOneBy({
                idTelefone : telefoneId,
            });          
            if (telefoneEncontrado) {
                return telefoneEncontrado;
            }
            return null;         
        } catch (error) {
            throw new Error("Falha ao buscar o Telefone!");
        }
    }

    async update(telefone: Telefone): Promise<number> {
        const { idTelefone, telefone1, telefone2 } = telefone;
        try {
            this.telefonesDB.save(telefone)
            return 1;
        } catch (error) {
            throw new Error("Falha ao atualizar o Telefone!");
        }
    }

    async delete(telefoneId: number): Promise<number> {
        try {
            var telefoneEncontrado = await this.telefonesDB.findOneBy({
                idTelefone : telefoneId,
            });
            if (telefoneEncontrado) {
                this.telefonesDB.remove(telefoneEncontrado)
                return 1;
            } 
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o Telefone!");
        }
    }
/*
    async deleteAll(): Promise<number> {
        try {
            let num = this.telefonesDB.length;
            this.telefonesDB.splice(0, this.telefonesDB.length);
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os Telefone!");
        }
    }
*/
}

export default new TelefoneRepository();


