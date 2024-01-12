import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(['login'])
export class Login {
  @PrimaryGeneratedColumn()
  id: number ;

  @Column({ length: 70, nullable: false })
  login: string ;

  @Column({ length: 45, nullable: false })
  senha: string ;

  // construtor
  constructor(id: number, login: string, senha: string){
    this.id = id,
    this.login = login,
    this.senha = senha
  }
}
