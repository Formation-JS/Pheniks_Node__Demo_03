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

  // (GET) /api/product/:id
  getById: async (req: Request, res: Response) => {

    // Récuperation de parametre dans la route
    const id = parseInt(req.params.id);

    // Test de garde sur la validation du parametre
    if(isNaN(id)) {
      res.sendStatus(400);
      return;
    }

    // Traitement
    const product = await productService.getById(id);

    // Réponse de la requete
    if(!product) {
      res.sendStatus(404);
      return;
    }
    res.status(200).json(product);
  },

  // (POST) /api/product
  insert : async (req: Request, res: Response) => {

    // Récuperation des données JSON
    const data = req.body as ProductData;
    
    // Traitement
    const productAdded = await productService.insert(data);

    // Réponse de la requete
    res.status(201)
      .location(`/api/product/${productAdded.id}`)
      .json(productAdded);
  }

};
export default productController;