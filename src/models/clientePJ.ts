import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Cliente } from './Cliente';

@Entity()
export class ClientePJ {
  @PrimaryColumn({ length: 18 })
  cnpj: number;

  @Column({ length: 70, nullable: false })
  razaoSocial: string;

  @Column({ length: 70, nullable: false })
  nomeFantasia: string ;

  @Column({ type: 'date', nullable: false })
  dataFundacao: Date ;

  @OneToOne(() => Cliente)
  @JoinColumn({ name: 'Cliente_idCliente' })
  cliente: Cliente ;
    email: string ;
    telefone: string ;
    idCliente: number ;

  //contrutor
  constructor(cnpj: number, razaoSocial: string, nomeFantasia: string, dataFundacao: Date, 
    cliente: Cliente, email: string, telefone: string, idCliente: number) {
      this.cnpj = cnpj,
      this.razaoSocial = razaoSocial,
      this.nomeFantasia = nomeFantasia,
      this.dataFundacao = dataFundacao,
      this.cliente = cliente,
      this.email = email,
      this.telefone = telefone,
      this.idCliente= idCliente
    }
}
