import type { Product, ProductData } from '../@types/product';
import { ProductDetailDto, ProductListDto } from '../dto/product.dto';


const fakeProducts: Product[] = [
  { 
    id: 1,
    name: 'Exemple',
    desc: 'Ceci est un exemple',
    inStock: true,
    price: 42,
    createAt : new Date(2025, 4, 19, 16, 30, 0)
  }
];
let nextProductId = 2;


const productService = {

  getAll: async () => {
    // Dans la démo, le but de "structuredClone" est de cassé la ref mémoire avant l'envoi
    return fakeProducts.map(p => new ProductListDto(p));
  },

  insert: async (product: ProductData) => {

    const productAdded: Product = {
      ...product,
      id: nextProductId++,
      createAt: new Date()
    };

    fakeProducts.push(productAdded);
    
    return new ProductDetailDto(productAdded);
  },

  getById: async (productId: number) => {
    
    const product = fakeProducts.find(p => p.id === productId);
    return (!!product) ? new ProductDetailDto(product) : null;
  },
  
  update: async (productId: number, data: ProductData) => {
    throw new Error('Not implemented');
  },
  
  delete: async (productId: number) => {
    
    const targetIndex = fakeProducts.findIndex(p => p.id === productId);

    if(targetIndex >= 0) {
      fakeProducts.splice(targetIndex, 1);
      return true;
    }

    return false;
  },

};
export default productService;
