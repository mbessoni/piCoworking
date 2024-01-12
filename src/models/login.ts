import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity({name: 'login'})
@Unique(['login'])
export class Login {
  @PrimaryGeneratedColumn({name: 'id'})
  id: number ;

  @Column({ name: 'login', length: 70, nullable: false })
  login: string ;

  @Column({ name: 'senha', length: 45, nullable: false })
  senha: string ;

  // construtor
  constructor(id: number, login: string, senha: string){
    this.id = id,
    this.login = login,
    this.senha = senha
  }
}
