import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './Cliente';

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  IdEndereco: number;

  @Column({ length: 2, nullable: false })
  uf: string ;

  @Column({ length: 10, nullable: false })
  cep: string ;

  @Column({ length: 45, nullable: false })
  cidade: string ;

  @Column({ length: 45, nullable: false })
  bairro: string ;

  @Column({ length: 45, nullable: false })
  rua: string ;

  @Column({ length: 45, nullable: false })
  numero: string ;

  @Column({ length: 45, nullable: false })
  complemento: string ;

  @Column({ length: 45, nullable: true })
  obs: string ;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'Cliente_idCliente' })
  cliente: Cliente ;

  // construtor
  constructor(idEndereco: number, uf: string, cep: string, cidade: string, bairro: string, 
    rua: string, numero: string, complemento: string, obs: string, cliente: Cliente ){
      this.IdEndereco = idEndereco,
      this.uf = uf ,
      this.cep = cep ,
      this.cidade= cidade ,
      this.bairro = bairro ,
      this.rua = rua ,
      this.numero = numero ,
      this.complemento = complemento,
      this.obs = obs ,
      this.cliente = cliente
    }
}
