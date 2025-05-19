import { Router } from 'express';
import productRouter from './product.route';

const apiRouter = Router();

apiRouter.use('/product', productRouter);

export default apiRouter;