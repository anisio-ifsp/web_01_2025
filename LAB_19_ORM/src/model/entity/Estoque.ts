import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Carro } from './Carro';

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantidade: number;

  @Column()
  carroId: number;

  @OneToOne(() => Carro)
  @JoinColumn({ name: 'carroId' }) // cria a chave estrangeira
  carro!: Carro;

  constructor(quantidade: number, carroId: number) {
    this.quantidade = quantidade;
    this.carroId = carroId;
  }
}
