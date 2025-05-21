import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'product' })
export default class ProductModel {

  @PrimaryGeneratedColumn('identity', { primaryKeyConstraintName: 'PK_Product' })
  id: number;

  @Column('varchar', { length: 50 })
  @Unique('UK_Product__Name', ['name'])
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