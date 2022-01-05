// MODULES
const Product = require('../models/productsModels');
const Fab = require('../models/fabModels')

// CONTROLLERS

// Get all products with QueryParams
//Filtrado
exports.getAllProducts = async (req, res) => {
  try {
    //Construccion de la copia de la query para filtrar por los parametros que queremos
    const copyQuery = {...req.query};
    const excludeParams = ['page', 'sort','limit'] //params que implementaremos luego en la Api y que queremos excluir
  
    excludeParams.forEach(e => delete copyQuery[e]);//bucle de un array para que devuelva cada uno de los elementos//con esta funcion borro cada uno de los elementos que coincidan con los que estoy excluyendo en excludeParams
    
    //Filtrado avanzado
    //[gt]  <  mayor que
    //[gte] <= mayor o igual (palabra reservada de Mongo)
    //[lte] >= menor o igual  -- hay que añadir un simbolo de  $ para poder hacer estas busquedas en mongo
    //[lt]  >  menor que
    let stringQuery = JSON.stringify(copyQuery); //Paso a string el objeto para poder utilizar regex y añadir simbolo $
    stringQuery = stringQuery.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`); //funcion para añadir $
      console.log (stringQuery)
    let  query = Product.find(JSON.parse(stringQuery)) //con Find() metodo de mongoose. buscamos todos los productos filtrado previamente por los parametros que le he dicho en mi copyQuery
    //con JSON.parse convierto el string a objeto de nuevo.

  //ejecuto las querys
    const products = await query.populate('fab'); //con populate() metodo de mongoose añadimos tb los datos guardados en fabricante(fab)
    res.status(200).json({
      status: 'success',
      count: products.length,
      data: { products },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};


//GET Product by id
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: { product },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};


// Create product 
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { product: newProduct },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};


// Udpate product 
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({
      status: 'success',
      data: {product},
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};


// Delete product 
exports.deleteproduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};





