import express, { NextFunction, Request, Response } from 'express';
import apiRouter from './routes';


//! Initialisation de la WebAPI
const app = express();

//? Middleware
//  - Custom - Temps de requete
app.use((req: Request, res: Response, next: NextFunction) => {
  
  // Traitement avant les prochains middlewares
  const timerStart = (new Date()).getTime();

  // Passer au middleware suivant
  next();

  // Traitement après le traitements des middlewares
  const timerEnd = (new Date()).getTime();
  console.log(`(${req.method}) ${req.url} - ${timerEnd - timerStart}ms`);

});

//  - Gestion des données JSON
app.use(express.json({ limit: '1mb' }));



//! Routing
app.use('/api', apiRouter);

//! Demarrage de la WebAPI
app.listen(8080, () => {
  console.log(`Web API is running on port ${8080}`);
});