import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TipoSalas } from './TipoSalas';
import { StatusSala } from './statusSala';
import { Agendamento } from './agendamento';

@Entity({name: 'Salas'})
export class Salas {
  @PrimaryGeneratedColumn({name: 'idSala'})
  idSala: number  ;

  @Column({ name: 'nome', length: 70, nullable: false })
  nome: string ;

  @Column({ name: 'qtdPessoas', type: 'int', nullable: false })
  qtdPessoas: number ;

  @Column({ length: 90, nullable: true })
  obs: string 

  @ManyToOne(() => StatusSala)
  @JoinColumn({ name: 'TipoSalas_idTipoSalas1' })
  statusSala: StatusSala 

  @ManyToOne(() => TipoSalas)
  @JoinColumn({ name: 'TipoSalas_idTipoSalas1' })
  tipoSala: TipoSalas ;

  @ManyToOne(() => Agendamento)
  @JoinColumn({ name: 'Agendamento_idAgendamento', referencedColumnName: 'idAgendamento' })
  agendamento: Agendamento ;

  // construtor
  constructor(idSala: number, nome: string, qtdPessoas: number, obs: string, statusSala: StatusSala,
    tipoSala: TipoSalas, agendamento: Agendamento){
      this.idSala = idSala,
      this.nome = nome ,
      this.qtdPessoas= qtdPessoas,
      this.obs = obs,
      this.statusSala = statusSala,
      this.tipoSala = tipoSala,
      this.agendamento = agendamento

    }
}
