import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity({name: 'testemunha'})
@Unique(['cpf'])
export class Testemunha {
  @PrimaryGeneratedColumn({name: 'idTestemunha' })
  idTestemunha: number ;

  @Column({name: 'nome', length: 45, nullable: false })
  nome: string ;

  @Column({name: 'cpf', length: 14, nullable: true, unique: true })
  cpf: string ;

  // construtor
  constructor(idTestemunha: number, nome: string, cpf: string){
    this.idTestemunha = idTestemunha;
    this.nome = nome;
    this.cpf = cpf
  }
}
