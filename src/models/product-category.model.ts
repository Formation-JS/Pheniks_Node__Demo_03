import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ProductModel from './product.model';



@Entity({ name: 'product_category' })
export default class ProductCategoryModel {

  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  name: string;

  @OneToMany(() => ProductModel, p => p.category)
  products: ProductModel[];

};