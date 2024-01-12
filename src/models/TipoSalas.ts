import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'TipoSalas'})
export class TipoSalas {
  @PrimaryGeneratedColumn({name: 'idTipoSalas'})
  idTipoSalas: number ;

  @Column({name: 'tipo', length: 80, nullable: false })
  tipo: string ;

  // construtor
  constructor(idTipoSalas: number, tipo: string){
    this.idTipoSalas = idTipoSalas;
    this.tipo = tipo;
  }
}
