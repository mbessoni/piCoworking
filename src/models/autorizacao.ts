import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Funcionario } from './funcionario';

@Entity({name: 'autorizacao'})
@Unique(['funcionario'])
export class Autorizacao {
  @PrimaryGeneratedColumn({name: 'idAutorizacao'})
  idAutorizacao: number;

  @Column({name: 'tipo', type: 'tinyint', nullable: false })
  tipo: number;

  @Column({name: 'obs', length: 45, nullable: false })
  obs: string;

  @ManyToOne(() => Funcionario )
  @JoinColumn({ name: 'funcionario_cpf' })
  funcionario: Funcionario;
  /*
  @Column({name: 'funcionario', length: 45, nullable: false, unique: true })
  funcionario: string;
  */

  // construtor
  constructor(idAutorizacao: number, tipo: number, obs: string, funcionario: Funcionario){
    this.idAutorizacao = idAutorizacao,
    this.tipo = tipo,
    this.obs = obs,
    this.funcionario = funcionario
  }
}
