import { Email } from "../models/Email";

class EmailRepository {
    emailsDB = new Array<Email>();

    async save(email: Email): Promise<Email> {
        try {
            this.emailsDB.push(email);
            return email;
        } catch (err) {
            throw new Error("Falha ao criar o Email!");
        }
    }

    async retrieveAll(): Promise<Array<Email>> {
        try {
            return this.emailsDB;
        } catch (error) {
            throw new Error("Falha ao retornar os Email!");
        }
    }

    async retrieveById(emailId: number): Promise<Email | null> {
        try {
            var encontrado = false;
            var emailEncontrado = null;
            this.emailsDB.forEach(element => {            
                if (element.idEmail == emailId) {
                    emailEncontrado = element;
                    encontrado = true;
                }
            });
            if (encontrado) {
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
            var encontrado = false;
            this.emailsDB.forEach(element => {
                if (element.idEmail == email.idEmail) {
                    element.email = Email.email;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            } 
            return 0;
        } catch (error) {
            throw new Error("Falha ao atualizar o Email!");
        }
    }

    async delete(emailId: number): Promise<number> {
        try {
            var encontrado = false;
            this.emailsDB.forEach(element => {
                if (element.idEmail == emailId) {
                    this.emailsDB.splice(this.emailsDB.indexOf(element), 1);
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            } 
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o Email!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            let num = this.emailsDB.length;
            this.emailsDB.splice(0, this.emailsDB.length);
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os Email!");
        }
    }

}

export default new EmailRepository();
