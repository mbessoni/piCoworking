import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Testemunha } from './testemunha';
import { Contrato } from './contrato';
import test from 'node:test';

@Entity({name: 'Testemunha_has_Contrato'})
export class Testemunha_has_Contrato {
  @PrimaryColumn({name: 'Testemunha_idTestemunha'})
  Testemunha_idTestemunha: number;

  @PrimaryColumn({name: 'Contrato_idContrato'})
  Contrato_idContrato: number;

  @ManyToOne(() => Testemunha)
  @JoinColumn({ name: 'Testemunha_idTestemunha' })
  testemunha: Testemunha;

  @ManyToOne(() => Contrato)
  @JoinColumn({ name: 'Contrato_idContrato' })
  contrato: Contrato;

  //construtor
  constructor(Testemuna_idTestemunha: number, Contrato_idContrato: number,
    testemunha: Testemunha, contrato: Contrato){
      this.Testemunha_idTestemunha= Testemuna_idTestemunha,
      this.Contrato_idContrato = Contrato_idContrato,
      this.testemunha = testemunha,
      this.contrato = contrato
    }
}
