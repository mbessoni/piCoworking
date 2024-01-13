import { AppDataSource } from "../db/data-source";
import { Testemunha } from "../models/testemunha";

class TestemunhaRepository {
    testemunhasDB = AppDataSource.getRepository(Testemunha);
    async save(testemunha: Testemunha): Promise<Testemunha> {
        try {
            this.testemunhasDB.save(testemunha);
            return testemunha;
        } catch (err) {
            throw new Error("Falha ao criar o Testemunha!");
        }
    }

    async retrieveAll(): Promise<Array<Testemunha>> {
        try {
            return this.testemunhasDB.find();
        } catch (error) {
            throw new Error("Falha ao retornar os Testemunha!");
        }
    }

    async retrieveById(testemunhaId: number): Promise<Testemunha | null> {
        try {
            var testemunhaEncontrado = this.testemunhasDB.findOneBy({
                idTestemunha : testemunhaId,
            });
            if (testemunhaEncontrado){
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
            this.testemunhasDB.save(testemunha);
            return 1;
        } catch (error) {
            throw new Error("Falha ao atualizar o Testemunha!");
        }
    }

    async delete(testemunhaId: number): Promise<number> {
        try {
            var testemunhaEncontrado = await this.testemunhasDB.findOneBy({
                idTestemunha : testemunhaId,
            });  
            if (testemunhaEncontrado) {
                this.testemunhasDB.remove(testemunhaEncontrado);
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o Testemunha!");
        }
    }
/*
    async deleteAll(): Promise<number> {
        try {
            let num = this.testemunhasDB.length;
            this.testemunhasDB.splice(0, this.testemunhasDB.length);
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os Testemunha!");
        }
    }
*/
}

export default new TestemunhaRepository();
