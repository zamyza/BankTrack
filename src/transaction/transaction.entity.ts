import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  detail: string;

  @Column()
  date: Date;

  @Column()
  bank: number;
  //1 falabella
  //2 santander

  @Column()
  ammount: number;

  @Column()
  type: number;
  //1 money going out
  //2 money going in

  @Column({nullable: true})
  balance: number;
  //balance post transaction
  
}
