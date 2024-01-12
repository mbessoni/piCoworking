import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(['funcionario'])
export class Autorizacao {
  @PrimaryGeneratedColumn()
  idAutorizacao: number;

  @Column({ type: 'tinyint', nullable: false })
  tipo: number;

  @Column({ length: 45, nullable: false })
  obs: string;

  @Column({ length: 45, nullable: false, unique: true })
  funcionario: string;

  // construtor
  constructor(idAutorizacao: number, tipo: number, obs: string, funcionario: string){
    this.idAutorizacao = idAutorizacao,
    this.tipo = tipo,
    this.obs = obs,
    this.funcionario = funcionario
  }
}
