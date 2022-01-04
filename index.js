// modules
const express = require('express');
const app = express();
const productsControllers =  require('./controllers/productsControllers');

// MIDDLEWARES
// (Estos dos se usan en lugar de 'body-parser' que ya está deprecated. Sólo actúan en POST y PUT requests. Son necesarios para capturar el body)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// ROUTES
//get all products route
app.get('/api/products', productsControllers.getAllProducts);
//get one product by name
app.get('/api/products/name/:name' , productsControllers.getOneProductByName );
//get one product by fab
app.get('/api/products/fab/:fab', productsControllers.getOneProductByFab);
//create product
app.post('/api/products', productsControllers.createProduct);
//UPDATE one product by id
app.get('/api/products/:id', productsControllers.updateProduct);
//DELETE one product by id
 app.delete('/api/products/:id' , productsControllers.deleteproduct);

 
// SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});