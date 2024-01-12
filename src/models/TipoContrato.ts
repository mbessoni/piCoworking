import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('TipoContrato')
export class TipoContrato {
  @PrimaryColumn()
  idTipoContrato: number;

  @Column({ length: 80 })
  descricao: string;

  // construtor
  constructor(idTipoContrato: number, descricao: string){
    this.idTipoContrato = idTipoContrato,
    this.descricao = descricao
  }
}
