//MODULES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Fab = mongoose.model('./models/fabModels');

//SCHEMA DE MONGOOSE
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Debe rellenar el campo nombre']
    },
    price: {
        type: Number,
        required: [true, 'Debe rellenar el precio']
    },
    rating: {
        type: Number,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    fab: {
        type: Schema.ObjetId,
        ref: "Fab"
    },
});


//Export del modelo mongoose
module.exports = mongoose.model("products", productSchema)