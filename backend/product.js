var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var ProductsSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },

    rentalRate: {
        type: Number,
        required: true
    },
    retailRate: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    subtype: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    fit: {
        type: String,
        required: true
    },
    occation: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    pattern: {
        type: String,
        required: true
    },
    productdetail: {
        type: String,
        required: true
    },
    damage: {
        type: String,
        required: true
    },
    care: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    },
});

// Create model from schema
var Product = mongoose.model("Product", ProductsSchema);

// Exporting model
module.exports = Product;