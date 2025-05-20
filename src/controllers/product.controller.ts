import type { Request, Response } from 'express';
import type { ProductData } from '../@types/product';
import productService from '../services/product.service';

const productController = {

  // (GET) /api/product 
  getAll: async (req: Request, res: Response) => {

    // Récuperation des données depuis le service
    const products = await productService.getAll();

    // Envoi des données sous le format JSON
    res.status(200).json(products);
  },

  // (POST) /api/product
  insert : async (req: Request, res: Response) => {

    // Récuperation des données JSON
    const data = req.body as ProductData;
    
    // Traitement
    const productAdded = await productService.insert(data);

    // Réponse de la requete
    res.status(201)
      .location('/api/product')
      .json(productAdded);
  }

};
export default productController;