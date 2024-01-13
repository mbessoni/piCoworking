import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Salas } from './salas';

@Entity({name: 'statusSalas'})
export class StatusSala {
  @PrimaryGeneratedColumn({name: 'idStatus'})
  idStatus: number;

  @Column({name: 'tipo', length: 45, nullable: false })
  tipo: string;

  @ManyToOne(() => Salas)
  @JoinColumn({ name: 'Salas_idSala' })
  sala: Salas;

  // Constructor
  constructor(idStatus: number, tipo: string, sala: Salas) {
    this.idStatus = idStatus;
    this.tipo = tipo;
    this.sala = sala;
}
}
