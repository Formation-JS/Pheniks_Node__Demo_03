import express from 'express';
import apiRouter from './routes';


//! Initialisation de la WebAPI
const app = express();

//! Routing
app.use('/api', apiRouter);

//! Demarrage de la WebAPI
app.listen(8080, () => {
  console.log(`Web API is running on port ${8080}`);
});