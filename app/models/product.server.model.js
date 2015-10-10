// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ProductSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: Number,
    list: String,
    category: String,
    variant: String,
    brand: String,
    position: Number
});


mongoose.model('Product', ProductSchema);