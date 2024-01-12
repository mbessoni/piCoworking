import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Login } from './login';

@Entity({name: 'agendamento'})
export class Agendamento {
  @PrimaryGeneratedColumn({name: 'idAgendamento'})
  idAgendamento: number;

  @Column({ name: 'horaInicio', type: 'time', nullable: false })
  horaInicio: string;

  @Column({ name: 'horaFim', type: 'time', nullable: false })
  horaFim: string;

  @Column({ name: 'data', type: 'date', nullable: false })
  data: Date;

  @Column({ name: 'salaTrab', length: 45, nullable: false })
  salaTrab: string;

  @Column({ name: 'autorizacao', length: 45, nullable: false })
  autorizacao: string;

  @Column({  name: 'login', length: 45, nullable: false })
  login: string;

  @Column({ name: 'dataRequisicao', type: 'date', nullable: false })
  dataRequisicao: Date;

  @Column({ name: 'dataAlteracao', type: 'date', nullable: false })
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
