import { TipoSalas } from "../models/TipoSalas";

class TiposSalasRepository {
    tiposSalassDB = new Array<TipoSalas>();
  
    async save(tipoSalas: TipoSalas): Promise<TipoSalas> {
        try {
            this.tiposSalassDB.push(tipoSalas);
            return tipoSalas;
        } catch (err) {
            throw new Error("Falha ao criar o tiposSalas!");
        }
    }
  
    async retrieveAll(): Promise<Array<TipoSalas>> {
        try {
            return this.tiposSalassDB;
        } catch (error) {
            throw new Error("Falha ao retornar os tiposSalas!");
        }
    }
  
    async retrieveById(tiposSalasId: number): Promise<TipoSalas | null> {
        try {
            var encontrado = false;
            var tiposSalasEncontrado = null;
            this.tiposSalassDB.forEach(element => {
                if (element.idTipoSalas == tiposSalasId) {
                    tiposSalasEncontrado = element;
                    encontrado = true;
                }
            });
            if (encontrado) {
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
            var encontrado = false;
            this.tiposSalassDB.forEach(element => {
                if (element.idTipoSalas == tipoSalas.idTipoSalas) {
                    element.tipo = tipoSalas.tipo;
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao atualizar as tiposSalas!");
        }
    }
  
    async delete(tipoSalasId: number): Promise<number> {
        try {
            var encontrado = false;
            this.tiposSalassDB.forEach(element => {
                if (element.idTipoSalas == tipoSalasId) {
                    this.tiposSalassDB.splice(this.tiposSalassDB.indexOf(element), 1);
                    encontrado = true;
                }
            });
            if (encontrado) {
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o tiposSalas!");
        }
    }
  
    async deleteAll(): Promise<number> {
        try {
            let num = this.tiposSalassDB.length;
            this.tiposSalassDB.splice(0, this.tiposSalassDB.length);
            return num;
        } catch (error) {
            throw new Error("Falha ao deletar todos os tiposSalas!");
        }
    }
  
  }
  
  export default new TiposSalasRepository();