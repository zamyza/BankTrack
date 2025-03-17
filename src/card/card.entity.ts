import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  carHolder: string;

  @Column()
  bank: number;
  //1 falabella
  //2 santander

  @Column()
  type: number;
  //1 credit
  //1 debit

  @Column()
  avilableCredit: number;

  @Column()
  currentBalance: number;
}
