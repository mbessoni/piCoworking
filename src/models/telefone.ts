import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './Cliente';
import { Funcionario } from './funcionario';

@Entity()
export class Telefone {
  @PrimaryGeneratedColumn()
  idTelefone: number;

  @Column({ length: 45, nullable: false })
  telefone1: string;

  @Column({ length: 45, nullable: true })
  telefone2: string;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'Cliente_idCliente' })
  cliente: Cliente;

  @ManyToOne(() => Funcionario)
  @JoinColumn({ name: 'Funcionario_cpf1' })
  funcionario: Funcionario  ;

  // construtor
  constructor( idTelefone: number, telefone1: string, telefone2: string, cliente: Cliente, funcionario: Funcionario){
    this.idTelefone = idTelefone,
    this.telefone1 = telefone1,
    this.telefone2 = telefone2,
    this.cliente = cliente,
    this.funcionario = funcionario;
  }
}
