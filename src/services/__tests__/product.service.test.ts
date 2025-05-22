import { db } from '../../db';
import { ProductDetailDto } from '../../dto/product.dto';
import ProductModel from '../../models/product.model';
import productService from '../product.service';

//! Mocking de la dépendence d'acces à la DB
// Permet de tester le service en remplacent la dépendence à l'objet "db"
// Remarque : Les mocks doivent être adapté aux sénarios des tests

//? Mock de répository pour le model "Product"
const productRepo = {
  // Mocking de la méthode "findOne"
  findOne: jest.fn(({ where }: { where: { id: number; }; }) => {

    if (where?.id === 1) {
      const product = new ProductModel();
      product.id = 1;
      product.name = 'Testing';
      product.desc = null;
      product.createAt = new Date(2025, 5, 21, 10, 0, 0);
      product.updateAt = new Date(2025, 5, 21, 11, 0, 0);
      product.inStock = true;
      product.price = 4.20;

      return Promise.resolve(product);
    }

    return Promise.resolve(null);
  })
};

//? Mock de l'objet "db" avec la méthode "getRepository"
jest.mock('../../db', () => ({
  db: {
    // Mocking de la méthode "getRepository" en fonction du type de "Model"
    getRepository: jest.fn((model) => {
      if (model === ProductModel) {
        return productRepo;
      }
    })
  }
}));

//! Test du service
describe("Product Service", () => {

  beforeEach(() => {
    // Permet de remettre à zéro les compteurs d'appel des mocks
    jest.clearAllMocks();
  });

  test("Get product by Id - Success", async () => {
    // Arrange
    const productId = 1;
    const expected = new ProductDetailDto({
      id: 1,
      name: 'Testing',
      desc: null,
      createAt: new Date(2025, 5, 21, 10, 0, 0),
      inStock: true,
      price: 4.20
    });

    // Test
    const actual = await productService.getById(productId);

    // Assert
    //? Resultat
    expect(actual).not.toBeNull();
    expect(actual).toEqual(expect.objectContaining(expected));
    //? Utilisation du Repo
    expect(db.getRepository).toHaveBeenCalledTimes(1);
    expect(db.getRepository).toHaveBeenCalledWith(ProductModel);
    expect(productRepo.findOne).toHaveBeenCalledTimes(1);
  });

  test("Get product by Id - Not found", async () => {
    // Arrange
    const productId = 2;

    // Test
    const actual = await productService.getById(productId);

    // Assert
    //? Resultat
    expect(actual).toBeNull();
    //? Utilisation du Repo
    expect(db.getRepository).toHaveBeenCalledTimes(1);
    expect(db.getRepository).toHaveBeenCalledWith(ProductModel);
    expect(productRepo.findOne).toHaveBeenCalledTimes(1);
  });

});