import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TipoSalas {
  @PrimaryGeneratedColumn()
  idTipoSalas: number ;

  @Column({ length: 80, nullable: false })
  tipo: string ;

  // construtor
  constructor(idTipoSalas: number, tipo: string){
    this.idTipoSalas = idTipoSalas;
    this.tipo = tipo;
  }
}
