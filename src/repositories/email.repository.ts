import { AppDataSource } from "../db/data-source";
import { Email } from "../models/email";

class EmailRepository {
    emailsDB = AppDataSource.getRepository(Email);

    async save(email: Email): Promise<Email> {
        try {
            this.emailsDB.save(email);
            return email;
        } catch (err) {
            throw new Error("Falha ao criar o Email!");
        }
    }

    async retrieveAll(): Promise<Array<Email>> {
        try {
            return this.emailsDB.find();
        } catch (error) {
            throw new Error("Falha ao retornar os Email!");
        }
    }

    async retrieveById(emailId: number): Promise<Email | null> {
        try {
            var emailEncontrado = this.emailsDB.findOneBy({
                idEmail : emailId,
            });           
            if (emailEncontrado) {
                return emailEncontrado;
            } 
            return null;         
        } catch (error) {
            throw new Error("Falha ao buscar o Email!");
        }
    }

    async update(email: Email): Promise<number> {
        const { idEmail, email1 } = email;
        try {
            this.emailsDB.save(email);
            return 1;
        } catch (error) {
            throw new Error("Falha ao atualizar o Email!");
        }
    }

    async delete(emailId: number): Promise<number> {
        try {
            var emailEncontrado = await this.emailsDB.findOneBy({
                idEmail: emailId,
            });
            if (emailEncontrado) {
                this.emailsDB.remove(emailEncontrado);
                return 1;
            } 
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o Email!");
        }
    }
/*
    async deleteAll(): Promise<number> {
        try {
            let num = this.emailsDB.length;
            this.emailsDB.splice(0, this.emailsDB.length);
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os Email!");
        }
    }
*/
}

export default new EmailRepository();
