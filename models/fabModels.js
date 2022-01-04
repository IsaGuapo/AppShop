//modules
const mongoose = require('mongoose');
// SCHEMA MONGOOSE
const fabSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'manufacturer must have a name'],
      //trim borrara los espacios que los usuarios pongas de mas
      trim: true,
    },
    cif:{
        type: String,
        required:[true, 'manufacturer must have a price'],
        trim: true,
    },
    addres:{
        type: String,
        required:[true, 'manufacturer must have a addres'],
        trim: true,
    },
});
//mongoose model
const Fab = mongoose.model('Fab',fabSchema);
//export model
module.exports = Fab;




