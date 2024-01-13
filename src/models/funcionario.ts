import { Entity, PrimaryColumn, Column, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { Login } from './login';
import { Autorizacao } from './autorizacao';

@Entity({name: 'funcionario'})
@Unique(['email'])
@Unique(['telefones'])
export class Funcionario {
  @PrimaryColumn({name: 'cpf' })
  cpf: Number ;

  @Column({name: 'nome', length: 45, nullable: false })
  nome: string ;

  @Column({name: 'email', length: 45, nullable: false })
  email: string ;

  @Column({name: 'telefones', length: 45, nullable: false })
  telefones: string ;

  @ManyToOne(() => Login)
  @JoinColumn({ name: 'Login_idLogin' })
  login: Login ;

  

  // construtor
  constructor(cpf: number, nome: string, email: string, telefones: string, 
    login: Login){
    this.cpf = cpf,
    this.email = email,
    this.nome = nome;
    this.telefones = telefones,
    this.login = login
    
  }
}
