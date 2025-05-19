import express from 'express';


//! Initialisation de la WebAPI
const app = express();

//TODO Routing
app.get('/', (req, res) => {

  res.send('Hello World');
});

//! Demarrage de la WebAPI
app.listen(8080, () => {
  console.log(`Web API is running on port ${8080}`);
});