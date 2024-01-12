import { Entity, PrimaryColumn, Column, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { Login } from './login';
import { Autorizacao } from './autorizacao';

@Entity({name: 'funcionario',})
@Unique(['email'])
@Unique(['telefones'])
export class Funcionario {
  @PrimaryColumn({name: 'cpf', length: 14 })
  cpf: Number ;

  @Column({name: 'nome', length: 45, nullable: false })
  nome: string ;

  @Column({name: 'email', length: 45, nullable: false, unique: true })
  email: string ;

  @Column({name: 'telefone', length: 45, nullable: false, unique: true })
  telefones: string ;

  @ManyToOne(() => Login)
  @JoinColumn({ name: 'Login_idLogin1' })
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
