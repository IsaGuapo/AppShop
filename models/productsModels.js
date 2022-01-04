//modules
const mongoose = require('mongoose');
const Fab = require('./fabModels');


// SCHEMA MONGOOSE
const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      trim: true,
    },
    price:{
        type: Number,
        required:[true, 'A product must have a price'],
    },
    rating:{
        type: Number,
    },
    img_url:{
        type: String,
        required:[true, 'A product must have a price'],
    },
    fab:{
        type:mongoose.Schema.Types.ObjectId,
        ref: Fab,
    }
});

