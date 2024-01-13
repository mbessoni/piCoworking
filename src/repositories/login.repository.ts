import { AppDataSource } from "../db/data-source";
import { Login } from "../models/login";

class LoginRepository {
  loginsDB = AppDataSource.getRepository(Login);
  async save(login: Login): Promise<Login> {
      try {
          this.loginsDB.save(login);
          return login;
      } catch (err) {
          throw new Error("Falha ao criar o login!");
      }
  }

  async retrieveAll(): Promise<Array<Login>> {
      try {
          return this.loginsDB.find();
      } catch (error) {
          throw new Error("Falha ao retornar os login!");
      }
  }

  async retrieveById(loginId: number): Promise<Login | null> {
      try {
        var loginEncontrado = this.loginsDB.findOneBy({
            id : loginId,
        });         
        if (loginEncontrado) {
            return loginEncontrado;
        }        
        return null;         
      } catch (error) {
          throw new Error("Falha ao buscar o login!");
      }
  }

  async update(login: Login): Promise<number> {
      const { id, senha } = login;
      try {
          this.loginsDB.save(login);
          return 1; 
      } catch (error) {
          throw new Error("Falha ao atualizar o login!");
      }
  }

  async delete(loginId: number): Promise<number> {
      try {
        var loginEncontrado = await this.loginsDB.findOneBy({
            id: loginId,
        });
        if (loginEncontrado) {
            this.loginsDB.remove(loginEncontrado);
            return 1;
        } 
        return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o login!");
      }
  }
/*
  async deleteAll(): Promise<number> {
      try {
          let num = this.loginsDB.length;
          this.loginsDB.splice(0, this.loginsDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os login!");
      }
  }
*/
}

export default new LoginRepository();