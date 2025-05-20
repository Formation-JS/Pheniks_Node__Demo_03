import { Router } from 'express'
import productController from '../controllers/product.controller';


const productRouter = Router();

productRouter.route('/')
  .get(productController.getAll)
  .post(productController.insert)
  .all((req, res) => { res.sendStatus(405); });


export default productRouter;