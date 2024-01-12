import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({name: 'TipoContrato'})
export class TipoContrato {
  @PrimaryColumn({name: 'idTipoContrato'})
  idTipoContrato: number;

  @Column({name: 'descricao', length: 80 })
  descricao: string;

  // construtor
  constructor(idTipoContrato: number, descricao: string){
    this.idTipoContrato = idTipoContrato,
    this.descricao = descricao
  }
}
