import { Entity, PrimaryColumn, Column, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { Login } from './login';
import { Autorizacao } from './autorizacao';

@Entity()
@Unique(['email'])
@Unique(['telefones'])
export class Funcionario {
  @PrimaryColumn({ length: 14 })
  cpf: Number ;

  @Column({ length: 45, nullable: false })
  nome: string ;

  @Column({ length: 45, nullable: false, unique: true })
  email: string ;

  @Column({ length: 45, nullable: false, unique: true })
  telefones: string ;

  @ManyToOne(() => Login)
  @JoinColumn({ name: 'Login_idLogin1' })
  login: Login ;

  @ManyToOne(() => Autorizacao)
  @JoinColumn({ name: 'Autorizacao_idAutorizacao' })
  autorizacao: Autorizacao ;

  // construtor
  constructor(cpf: number, nome: string, email: string, telefones: string, login: Login, autorizacao: Autorizacao ){
    this.cpf = cpf,
    this.email = email,
    this.nome = nome;
    this.telefones = telefones,
    this.login = login,
    this.autorizacao = autorizacao
  }
}
