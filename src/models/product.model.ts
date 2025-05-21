import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'product' })
export default class ProductModel {

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

  // @Column({ type : 'timestamp', default: 'NOW()' })
  @CreateDateColumn({ type: 'timestamp with time zone' })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updateAt: Date;

};