import type { Product } from '../@types/product';

export class ProductDetailDto {

  id: number;
  name: string;
  desc: string;
  price: number;
  inStock: boolean;
  createAt: string;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.desc = product.desc ?? 'N/A';
    this.price = product.price;
    this.inStock = product.inStock;
    this.createAt = product.createAt.toISOString();
  }
}

export class ProductListDto {

  id: number;
  name: string;
  price: number;

    constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
  }
}
