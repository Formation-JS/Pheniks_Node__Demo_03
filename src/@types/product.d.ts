export type Product = {
  id: number;
  name: string;
  desc: string | null;
  price: number;
  inStock: boolean;
  createAt: Date;
};

export type ProductData = Omit<Product, 'id'|'createAt'>;

// --------------------------------------------------------

export type ProductData2 = {
  name: string;
  desc: string | null;
  price: number;
  inStock: boolean;
};

export type Product2 = ProductData & {
  id: number;
  createAt: Date;
};
