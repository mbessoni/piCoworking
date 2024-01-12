import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity({name: 'autorizacao'})
@Unique(['funcionario'])
export class Autorizacao {
  @PrimaryGeneratedColumn({name: 'idAutorizacao'})
  idAutorizacao: number;

  @Column({name: 'tipo', type: 'tinyint', nullable: false })
  tipo: number;

  @Column({name: 'obs', length: 45, nullable: false })
  obs: string;

  @Column({name: 'funcionario', length: 45, nullable: false, unique: true })
  funcionario: string;

  // construtor
  constructor(idAutorizacao: number, tipo: number, obs: string, funcionario: string){
    this.idAutorizacao = idAutorizacao,
    this.tipo = tipo,
    this.obs = obs,
    this.funcionario = funcionario
  }
}
