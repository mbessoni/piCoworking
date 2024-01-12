import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'statusCliente'})
export class StatusCliente {
  @PrimaryGeneratedColumn({name: 'idStatusCliente'})
  idStatusCliente: number ;

  @Column({ name: 'tipo', length: 90, nullable: false })
  tipo: string ;

  // construtor
  constructor(idStatusCliente: number, tipo: string){
    this.idStatusCliente = idStatusCliente;
    this.tipo = tipo;
  }
}
