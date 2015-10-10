// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ElementSearchSchema = new Schema({
    element: {
        type: mongoose.Schema.ObjectId,
        ref: 'Element'
    },
    search: {
        type: mongoose.Schema.ObjectId,
        ref: 'Search'
    }
});


mongoose.model('ElementSearch', ElementSearchSchema);