import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'contrato'})
export class Contrato {
  @PrimaryGeneratedColumn({name: 'idContrato'})
  idContrato: number;

  @Column({name: 'dataInicio', type: 'date', nullable: false })
  dataInicio: Date;

  @Column({name: 'dataFinal', type: 'date', nullable: false })
  dataFinal: Date ;

  @Column({name: 'dataAlteracao', type: 'date', nullable: false })
  dataAlteracao: Date ;

  @Column({name: 'valor', type: 'float', nullable: false })
  valor: number ;

  @Column({name: 'horaSR', type: 'int', nullable: false })
  horaSR: number ;

  @Column({name: 'horaSC', type: 'int', nullable: false })
  horaSC: number;

  @Column({name: 'qtdBaias', type: 'int', nullable: false })
  qtdBaias: number ;

  @Column({name: 'salaTrab', type: 'int', nullable: false })
  salaTrab: number;

  @Column({name: 'testemunha', type: 'int', nullable: false })
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
