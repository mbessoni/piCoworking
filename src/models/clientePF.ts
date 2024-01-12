import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Cliente } from './Cliente';

@Entity()
export class ClientePF {
  @PrimaryColumn({ length: 14 })
  cpf: number ;

  @Column({ length: 70, nullable: false })
  nome: string ;

  @Column({ type: 'date', nullable: false })
  dataNasc: Date ;

  @OneToOne(() => Cliente)
  @JoinColumn({ name: 'Cliente_idCliente' })
  cliente: Cliente;
  email: string ;
  telefone: string ;

  // construtor
  constructor(cpf: number, nome: string, dataNasc: Date, cliente: Cliente
    , email: string, telefone: string) {
      this.cpf = cpf,
      this.nome = nome,
      this.dataNasc = dataNasc,
      this.cliente = cliente,
      this.email = email,
      this.telefone = telefone
}
}
