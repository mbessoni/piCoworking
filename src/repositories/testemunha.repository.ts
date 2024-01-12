import { Testemunha } from "../models/testemunha";

class TestemunhaRepository {
    testemunhasDB = new Array<Testemunha>();

    async save(testemunha: Testemunha): Promise<Testemunha> {
        try {
            this.testemunhasDB.push(testemunha);
            return testemunha;
        } catch (err) {
            throw new Error("Falha ao criar o Testemunha!");
        }
    }

    async retrieveAll(): Promise<Array<Testemunha>> {
        try {
            return this.testemunhasDB;
        } catch (error) {
            throw new Error("Falha ao retornar os Testemunha!");
        }
    }

    async retrieveById(testemunhaId: number): Promise<Testemunha | null> {
        try {
            var encontrado = false;
            var testemunhaEncontrado = null;
            this.testemunhasDB.forEach(element => {
                if (element.idTestemunha == testemunhaId) {
                    testemunhaEncontrado = element;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return testemunhaEncontrado;
            }
            return null;
        } catch (error) {
            throw new Error("Falha ao buscar o Testemunha!");
        }
    }

    async update(testemunha: Testemunha): Promise<number> {
        const { idTestemunha, nome , cpf} = testemunha;
        try {
            var encontrado = false;
            this.testemunhasDB.forEach(element => {
                if (element.idTestemunha == testemunha.idTestemunha) {
                    element.nome = testemunha.nome;
                    element.cpf = testemunha.cpf;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao atualizar o Testemunha!");
        }
    }

    async delete(testemunhaId: number): Promise<number> {
        try {
            var encontrado = false;
            this.testemunhasDB.forEach(element => {
                if (element.idTestemunha == testemunhaId) {
                    this.testemunhasDB.splice(this.testemunhasDB.indexOf(element), 1);
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o Testemunha!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            let num = this.testemunhasDB.length;
            this.testemunhasDB.splice(0, this.testemunhasDB.length);
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os Testemunha!");
        }
    }

}

export default new TestemunhaRepository();
