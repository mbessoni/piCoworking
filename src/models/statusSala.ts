import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Salas } from './Salas';

@Entity()
export class StatusSala {
  @PrimaryGeneratedColumn()
  idStatus: number;

  @Column({ length: 45, nullable: false })
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
