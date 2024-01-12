import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Login } from './login';

@Entity()
export class Agendamento {
  @PrimaryGeneratedColumn()
  idAgendamento: number;

  @Column({ type: 'time', nullable: false })
  horaInicio: string;

  @Column({ type: 'time', nullable: false })
  horaFim: string;

  @Column({ type: 'date', nullable: false })
  data: Date;

  @Column({ length: 45, nullable: false })
  salaTrab: string;

  @Column({ length: 45, nullable: false })
  autorizacao: string;

  @Column({ length: 45, nullable: false })
  login: string;

  @Column({ type: 'date', nullable: false })
  dataRequisicao: Date;

  @Column({ type: 'date', nullable: false })
  dataAlteracao: Date;

  @ManyToOne(() => Login)
  @JoinColumn({ name: 'Login_idLogin' })
  loginObj: Login;

  // construtor
  constructor(idAgendamento: number, horaInicio: string, horaFim: string, data: Date, salaTrab: string, 
    autorizacao: string, login: string, dataRequisicao: Date, dataAlteracao: Date, loginObj: Login){
    this.idAgendamento = idAgendamento,
    this.horaInicio = horaInicio,
    this.horaFim = horaFim,
    this.data = data,
    this.salaTrab = salaTrab,
    this.autorizacao = autorizacao,
    this.login = login,
    this.dataRequisicao = dataRequisicao,
    this.dataAlteracao = dataAlteracao,
    this.loginObj = loginObj
  }
}
