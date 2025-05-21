import "reflect-metadata";
import { NODE_ENV, PORT } from './config.json';

import express, { NextFunction, Request, Response } from 'express';
import apiRouter from './routes';
import { db } from './db';


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


//! Utilisation de la DB
db.initialize()
  .then(() => {
    console.log('Database connection : OK');

    if(NODE_ENV === 'dev') {
      db.synchronize();
    }
  })
  .catch((error) => {
    console.log('Database connection : On error !');
    console.error(error);
  });
  

//! Routing
app.use('/api', apiRouter);


//! Demarrage de la WebAPI
app.listen(PORT, () => {
  console.log(`Web API is running on port ${PORT} [${NODE_ENV}]`);
});