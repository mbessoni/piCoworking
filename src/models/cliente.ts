import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { StatusCliente } from './statusCliente';
import { Login } from './login';

@Entity({name: 'cliente'})
@Unique(['email'])
@Unique(['telefone'])
export class Cliente {
  @PrimaryGeneratedColumn({name: 'idCliente'})
  idCliente: number;

  @Column({name: 'email', length: 45, nullable: false })
  email: string;

  @Column({name: 'telefone', length: 45, nullable: false })
  telefone: string;

  @Column({name: 'endereco', length: 45, nullable: false })
  endereco: string;

  @Column({name: 'contrato', length: 45, nullable: false })
  contrato: string;

  @ManyToOne(() => StatusCliente)
  @JoinColumn({ name: 'StatusCliente_idStatusCliente' })
  statusCliente: StatusCliente;

  @ManyToOne(() => Login)
  @JoinColumn({ name: 'Login_idLogin1' })
  login: Login;

  // constructor
  constructor(idCliente: number, email: string, telefone: string, endereco: string, 
    contrato: string, statusCliente: StatusCliente, login: Login){
      this.idCliente = idCliente,
      this.email = email,
      this.telefone = telefone,
      this.endereco = endereco,
      this.contrato= contrato,
      this.statusCliente = statusCliente,
      this.login = login
        
      }

}
