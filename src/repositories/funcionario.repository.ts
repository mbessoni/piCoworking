import { AppDataSource } from "../db/data-source";
import { Funcionario } from "../models/funcionario";

class FuncionarioRepository {
  funcionariosDB = AppDataSource.getRepository(Funcionario);

  async save(funcionario: Funcionario): Promise<Funcionario> {
      try {
          this.funcionariosDB.save(funcionario);
          return funcionario;
      } catch (err) {
          throw new Error("Falha ao criar o funcionario!");
      }
  }

  async retrieveAll(): Promise<Array<Funcionario>> {
      try {
          return this.funcionariosDB.find();
      } catch (error) {
          throw new Error("Falha ao retornar os funcionario!");
      }
  }

  async retrieveById(funcionarioCpf: Number): Promise<Funcionario | null> {
      try {
        var funcionarioEncontrado = this.funcionariosDB.findOneBy({
            cpf : funcionarioCpf,
        });
        if (funcionarioEncontrado) {
            return funcionarioEncontrado;
        }
        return null;
      } catch (error) {
          throw new Error("Falha ao buscar o funcionario!");
      }
  }

  async update(funcionario: Funcionario): Promise<number> {
      const { cpf, nome , email, telefones} = funcionario;
      try {
        this.funcionariosDB.save(funcionario);
        return 1;
      } catch (error) {
          throw new Error("Falha ao atualizar o funcionario!");
      }
  }

  async delete(funcionarioCpf: Number): Promise<number> {
      try {
        var funcionarioEncontrado = await this.funcionariosDB.findOneBy({
            cpf : funcionarioCpf,
        });
        if (funcionarioEncontrado) {
            this.funcionariosDB.remove(funcionarioEncontrado);
            return 1;
          }
          return 0;
      } catch (error) {
          throw new Error("Falha ao deletar o funcionario!");
      }
  }
/*
  async deleteAll(): Promise<number> {
      try {
          let num = this.funcionariosDB.length;
          this.funcionariosDB.splice(0, this.funcionariosDB.length);
          return num;
      } catch (error) {
          throw new Error("Falha ao deletar todos os funcionario!");
      }
  }
*/
}

export default new FuncionarioRepository();