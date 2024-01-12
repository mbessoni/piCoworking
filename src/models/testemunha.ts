import { Entity, PrimaryColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique(['cpf'])
export class Testemunha {
  @PrimaryColumn({ type: 'int' })
  idTestemunha: number ;

  @Column({ length: 45, nullable: false })
  nome: string ;

  @Column({ length: 14, nullable: true, unique: true })
  cpf: string ;

  // construtor
  constructor(idTestemunha: number, nome: string, cpf: string){
    this.idTestemunha = idTestemunha;
    this.nome = nome;
    this.cpf = cpf
  }
}
