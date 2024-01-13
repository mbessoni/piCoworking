import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './cliente';
import { Funcionario } from './funcionario';

@Entity({name: 'email'})
export class Email {
  @PrimaryGeneratedColumn({name: 'idEmail'})
  idEmail: number;

  @Column({name: 'email', length: 45, nullable: true })
  email: string ;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'Cliente_idCliente' })
  cliente: Cliente ;

  @ManyToOne(() => Funcionario)
  @JoinColumn({ name: 'Funcionario_cpf' })
  funcionarioEmail: Funcionario;

  @Column({ length: 45, nullable: false })
  email1: string;
    static email: string;

    // construtor
    constructor(idEmail:number, email: string, cliente: Cliente, 
      funcionarioEmail: Funcionario, email1: string){
        this.idEmail = idEmail,
        this.email= email,
        this.cliente = cliente,
        this.funcionarioEmail = funcionarioEmail,
        this.email1 = email1
}
}