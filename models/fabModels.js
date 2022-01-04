const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const fabSchema = new Schema ({
    name_fab: { 
        type: String, 
        required: true 
    },
    CIF: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model ("Fab",fabSchema )