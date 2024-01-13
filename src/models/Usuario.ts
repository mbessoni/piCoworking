import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity({ name: 'Usuario' })
@Unique(['loginEmail'])
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'idUsuario' })
  idUsuario: number ;

  @Column({ name: 'login-email', length: 70 })
  loginEmail: string ;

  @Column({ name: 'senha', length: 45 })
  senha: string;

  @Column({ name: 'acessoAdm' })
  acessoAdm: number ;

  // construtor
  constructor(idUsuario: number, loginEmail: string, senha: string, acessoAdm: number){
    this.idUsuario = idUsuario;
    this.loginEmail = loginEmail;
    this.senha = senha;
    this.acessoAdm = acessoAdm
  }
}
