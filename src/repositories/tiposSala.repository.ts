import { AppDataSource } from "../db/data-source";
import { TipoSalas } from "../models/TipoSalas";

class TiposSalasRepository {
    tiposSalassDB = AppDataSource.getRepository(TipoSalas);
  
    async save(tipoSalas: TipoSalas): Promise<TipoSalas> {
        try {
            this.tiposSalassDB.save(tipoSalas);
            return tipoSalas;
        } catch (err) {
            throw new Error("Falha ao criar o tiposSalas!");
        }
    }
  
    async retrieveAll(): Promise<Array<TipoSalas>> {
        try {
            return this.tiposSalassDB.find();
        } catch (error) {
            throw new Error("Falha ao retornar os tiposSalas!");
        }
    }
  
    async retrieveById(tipoSalasId: number): Promise<TipoSalas | null> {
        try {
            var tiposSalasEncontrado = this.tiposSalassDB.findOneBy({
                idTipoSalas: tipoSalasId,
            });
            if (tiposSalasEncontrado) {
                return tiposSalasEncontrado;
            }           
            return null;
        } catch (error) {
            throw new Error("Falha ao buscar o tiposSalas!");
        }
    }
  
    async update(tipoSalas: TipoSalas): Promise<number> {
        const { idTipoSalas, tipo} = tipoSalas;
        try {
            this.tiposSalassDB.save(tipoSalas);             
            return 1;
        } catch (error) {
            throw new Error("Falha ao atualizar as tiposSalas!");
        }
    }
  
    async delete(tipoSalasId: number): Promise<number> {
        try {
            var tiposSalasEncontrado = await this.tiposSalassDB.findOneBy({
                idTipoSalas: tipoSalasId,
            });
            if (tiposSalasEncontrado){
                this.tiposSalassDB.remove(tiposSalasEncontrado);
                return 1;
            }    
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o tiposSalas!");
        }
    }
  /*
    async deleteAll(): Promise<number> {
        try {
            let num = this.tiposSalassDB.length;
            this.tiposSalassDB.splice(0, this.tiposSalassDB.length);
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os tiposSalas!");
        }
    }
  */
  }
  
  export default new TiposSalasRepository();