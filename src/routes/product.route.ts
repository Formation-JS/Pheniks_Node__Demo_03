import { Router } from 'express'
import productController from '../controllers/product.controller';
import { bodyValidatorMiddleware } from '../middlewares/body-validator.middleware';
import { productDataValidator } from '../validators/product.validator';


const productRouter = Router();

productRouter.route('/')
  .get(productController.getAll)
  .post(bodyValidatorMiddleware(productDataValidator), productController.insert)
  .all((req, res) => { res.sendStatus(405); });

productRouter.route('/:id')
  .get(productController.getById)
  .put(productController.update)
  .delete(productController.delete)
  .all((req, res) => { res.sendStatus(405); });


export default productRouter;