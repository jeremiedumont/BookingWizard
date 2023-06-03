import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  // Add more columns as needed

  // Optional relationships with other entities
  // ...
}
