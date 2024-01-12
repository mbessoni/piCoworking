import { Telefone } from "../models/Telefone";

class TelefoneRepository {
    telefonesDB = new Array<Telefone>();

    async save(telefone: Telefone): Promise<Telefone> {
        try {
            this.telefonesDB.push(telefone);
            return telefone;
        } catch (err) {
            throw new Error("Falha ao criar o Telefone!");
        }
    }

    async retrieveAll(): Promise<Array<Telefone>> {
        try {
            return this.telefonesDB;
        } catch (error) {
            throw new Error("Falha ao retornar os Telefones!");
        }
    }

    async retrieveById(telefoneId: number): Promise<Telefone | null> {
        try {
            var encontrado = false;
            var telefoneEncontrado = null;
            this.telefonesDB.forEach(element => {            
                if (element.idTelefone == telefoneId) {
                    telefoneEncontrado = element;
                    encontrado = true;
                }
            });
            if (encontrado) {
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
            var encontrado = false;
            this.telefonesDB.forEach(element => {
                if (element.idTelefone == telefone.idTelefone) {
                    element.telefone1 = telefone.telefone1;
                    element.telefone2 = telefone.telefone2;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            } 
            return 0;
        } catch (error) {
            throw new Error("Falha ao atualizar o Telefone!");
        }
    }

    async delete(telefoneId: number): Promise<number> {
        try {
            var encontrado = false;
            this.telefonesDB.forEach(element => {
                if (element.idTelefone == telefoneId) {
                    this.telefonesDB.splice(this.telefonesDB.indexOf(element), 1);
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            } 
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o Telefone!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            let num = this.telefonesDB.length;
            this.telefonesDB.splice(0, this.telefonesDB.length);
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os Telefone!");
        }
    }

}

export default new TelefoneRepository();


