import { Login } from "../models/login";

class LoginRepository {
  loginsDB = new Array<Login>();

  async save(login: Login): Promise<Login> {
      try {
          this.loginsDB.push(login);
          return login;
      } catch (err) {
          throw new Error("Falha ao criar o login!");
      }
  }

  async retrieveAll(): Promise<Array<Login>> {
      try {
          return this.loginsDB;
      } catch (error) {
          throw new Error("Falha ao retornar os login!");
      }
  }

  async retrieveById(loginId: number): Promise<Login | null> {
      try {
          var encontrado = false;
          var loginEncontrado = null;
          this.loginsDB.forEach(element => {            
              if (element.id == loginId) {
                  loginEncontrado = element;
                  encontrado = true;
              }
          });
          if (encontrado) {
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
          var encontrado = false;
          this.loginsDB.forEach(element => {
              if (element.id == login.id) {
                  element.id = login.id;
                  element.senha = login.senha;
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          } 
          return 0;
      } catch (error) {
          throw new Error("Falha ao atualizar o login!");
      }
  }

  async delete(loginId: number): Promise<number> {
      try {
          var encontrado = false;
          this.loginsDB.forEach(element => {
              if (element.id == loginId) {
                  this.loginsDB.splice(this.loginsDB.indexOf(element), 1);
                  encontrado = true;
              }
          });
          if (encontrado) {
              return 1;
          } 
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o login!");
      }
  }

  async deleteAll(): Promise<number> {
      try {
          let num = this.loginsDB.length;
          this.loginsDB.splice(0, this.loginsDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os login!");
      }
  }

}

export default new LoginRepository();