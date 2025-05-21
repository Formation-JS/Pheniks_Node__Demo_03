import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Product {

  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar', { length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  desc: string | null;

  @Column({ type: 'decimal', precision: 20, scale: 3 })
  price: number;

  @Column({ type: 'bool', default: false })
  inStock: boolean;

  @Column({ type : 'timestamp' })
  createAt: Date;

};