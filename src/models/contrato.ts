import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Contrato {
  @PrimaryGeneratedColumn()
  idContrato: number;

  @Column({ type: 'date', nullable: false })
  dataInicio: Date;

  @Column({ type: 'date', nullable: false })
  dataFinal: Date ;

  @Column({ type: 'date', nullable: false })
  dataAlteracao: Date ;

  @Column({ type: 'float', nullable: false })
  valor: number ;

  @Column({ type: 'int', nullable: false })
  horaSR: number ;

  @Column({ type: 'int', nullable: false })
  horaSC: number;

  @Column({ type: 'int', nullable: false })
  qtdBaias: number ;

  @Column({ type: 'int', nullable: false })
  salaTrab: number;

  @Column({ type: 'int', nullable: false })
  testemunha: number ;

  // construtor
  constructor(idContrato: number, dataInicio: Date, dataFinal: Date, dataAlteracao:Date, valor: number,
    horaSR: number, horaSC:number, qtdBaias: number, salaTrab: number, testemunha: number) {
      this.idContrato = idContrato,
      this.dataInicio = dataInicio,
      this.dataFinal = dataFinal,
      this.dataAlteracao = dataAlteracao,
      this.valor = valor,
      this.horaSR = horaSR,
      this.horaSC = horaSC,
      this.qtdBaias= qtdBaias,
      this.salaTrab = salaTrab,
      this.testemunha = testemunha
    }
}
