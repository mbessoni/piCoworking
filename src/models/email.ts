import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './Cliente';
import { Funcionario } from './funcionario';

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  idEmail: number;

  @Column({ length: 45, nullable: true })
  email: string ;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'Cliente_idCliente' })
  cliente: Cliente ;

  @ManyToOne(() => Funcionario)
  @JoinColumn({ name: 'Funcionario_cpf' })
  funcionario: Funcionario;

  @Column({ length: 45, nullable: false })
  email1: string |undefined;
    static email: string;

    // construtor
    constructor(idEmail:number, email: string, cliente: Cliente, 
      funcionario: Funcionario, email1: string){
        this.idEmail = idEmail,
        this.email= email,
        this.cliente = cliente,
        this.funcionario = funcionario,
        this.email1 = email1
}
}