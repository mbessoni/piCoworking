import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './cliente';

@Entity({name: 'endereco'})
export class Endereco {
  @PrimaryGeneratedColumn({name: 'idEndereco'})
  IdEndereco: number;

  @Column({name: 'uf', length: 2, nullable: false })
  uf: string ;

  @Column({name: 'cep', length: 10, nullable: false })
  cep: string ;

  @Column({name: 'cidade', length: 45, nullable: false })
  cidade: string ;

  @Column({name: 'bairro', length: 45, nullable: false })
  bairro: string ;

  @Column({name: 'rua', length: 45, nullable: false })
  rua: string ;

  @Column({name: 'numero', length: 45, nullable: false })
  numero: string ;

  @Column({name: 'complemento', length: 45, nullable: false })
  complemento: string ;

  @Column({name: 'obs', length: 45, nullable: true })
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
