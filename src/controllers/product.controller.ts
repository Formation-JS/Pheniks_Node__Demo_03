import type { Request, Response } from 'express';
import productService from '../services/product.service';

const productController = {

  // (GET) /api/product 
  getAll: async (req: Request, res: Response) => {

    // Récuperation des données depuis le service
    const products = await productService.getAll();

    // Envoi des données sous le format JSON
    res.status(200).json(products);
  }

};
export default productController;