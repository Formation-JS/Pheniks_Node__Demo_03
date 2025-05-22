import type { ProductData } from '../@types/product';
import { db } from '../db';
import { ProductDetailDto, ProductListDto } from '../dto/product.dto';
import ProductModel from '../models/product.model';
import ProductCategoryModel from '../models/product-category.model';


const productService = {

  getAll: async () => {
    //Exemple de requete avec la méthode "find"
    const result = await db.getRepository(ProductModel)
      .find({
        select: { id: true, name: true, price: true },
        order: { id: 'ASC' },
      });

    // Exemple de requete de Query Builder
    /*
    const builder = db.getRepository(ProductModel)
      .createQueryBuilder()
      .select(['id', 'name'])
      .addSelect('price')
      .orderBy('id', 'ASC');
    const result = await builder.getMany();
    */

    return result.map(p => new ProductListDto(p));
  },

  insert: async (product: ProductData) => {
    const productRepo = db.getRepository(ProductModel);
    const categoryRepo = db.getRepository(ProductCategoryModel);

    // Exemple d'interaction avec la relation
    let category = await categoryRepo.findOne({ 
      where: { name : 'Phéniks' }
    });
    if(!category) {
      category = await categoryRepo.create({ name: 'Phéniks' });
      await categoryRepo.save(category);
    }

    // Création d'un élément "DB" et sauvegarde
    const productDb = productRepo.create(product);
    productDb.category = category;
    await productRepo.save(productDb);

    // Requete INSERT dans la DB et resultat de celle-ci
    /*
    const inner = await productRepo.insert(product);
    */

    return new ProductDetailDto(productDb);
  },

  getById: async (productId: number) => {
    const productRepo = db.getRepository(ProductModel);

    const result = await productRepo.findOne({ 
      select: { category: { name: true }},
      where: { id: productId },
      relations: { category: true }
     });

    return (!!result) ? new ProductDetailDto(result) : null;
  },

  update: async (productId: number, data: ProductData) => {
    const productRepo = db.getRepository(ProductModel);

    // Récuperation d'un élément "DB", map les champs (manuel) et sauvegarde
    // → Detection des champs modifier (Pour optimisation)

    const productDb = await productRepo.findOneByOrFail({ id: productId });
    //? Affection champs par champs (a la mano)
    productDb.name = data.name;
    productDb.desc = data.desc;
    productDb.inStock = data.inStock;
    productDb.price = data.price;

    //? Affection à travers une boucle "for in"
    /*
    for(const key in data) {
      productDb[key] = data[key];
    }
    */

    //? Affection via la méthode "Object.assign" (Bypass optimisation)
    /*
    Object.assign(productDb, data);
    */

    await productRepo.save(productDb);


    // Requete UPDATE dans la DB et resultat de celle-ci
    /*
    const inner = await productRepo.update(productId, data);
    */

    return true;
  },

  delete: async (productId: number) => {
    const productRepo = db.getRepository(ProductModel);

    await productRepo.query('BEGIN');

    const result = await productRepo.delete(productId);

    if(result.affected === 1) {
      await productRepo.query('COMMIT');
      return true;
    }
    else {
      await productRepo.query('ROLLBACK');
      return false;
    }
  },

};
export default productService;
