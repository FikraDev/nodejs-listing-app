const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listschema = new Schema({

    parish: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    sqr_ft: {
        type: Number,
        required: true,
    },

    bed_rooms: {
        type: Number,
        required: true,
    },

    bath_rooms: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    status: {
        type: Number,
        required: true,
    },
});

const Proplist = mongoose.model('Proplist', listschema,"home")

module.exports = Proplist;