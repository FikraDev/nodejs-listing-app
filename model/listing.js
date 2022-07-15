const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listschema = new Schema({

    parish: String,
    address: String,
    city: String,
    sqr_ft: Number,
    bed_rooms: Number,
    bath_rooms: Number,
    price: Number,
    status: String
    
});

const Proplist = mongoose.model('Proplist', listschema,"home")

module.exports = Proplist;