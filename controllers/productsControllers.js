//controllers//

//get all products//
exports.getAllProducts = (req, res) => {
    res.status(200).json({
        status: 'success',
        data:'GET ALL PRODUCTS',    
      });
  };


//get one product by name
exports.getOneProductByName = (req, res) => {
    res.status(200).json({
        status: 'success',
        data:'GET BY NAME',    
      });  
  };

//get one product by fab
exports.getOneProductByFab = (req, res) => {
    res.status(200).json({
        status: 'success',
        data:'GET PRODUCT BY fab',    
      });
  };
//create product
exports.createProduct = (req, res) => {
    res.status(201).json({
        status: 'success',
        data:'PRODUCT CREATED',    
      });
  };

//UPDATE one product by id
  exports.updateProduct = (req, res) => {
    res.status(200).json({
        status: 'success',
        data:'PRODUCT UPDATE',    
      });
  };

//DELETE one product by id
exports.deleteproduct = (req, res) => {
    res.status(204).json({
        status: 'success',
        data:'null',    
      });
  };