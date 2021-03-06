// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
    moment = require('moment'),
	Element = mongoose.model('Element');

exports.navigationsDetails = function(req, res) {
    var harpyid = req.params.harpyid;
    Element.aggregate([
        { $match: {
            hitType: 'detail',
            harpyId: harpyid
        }},
        { $group: {
            _id: "$userId",
            count: { $sum: 1 },
            avgDuration: {$avg: "$duration"},
            minDuration: {$min: "$duration"},
            maxDuration: {$max: "$duration"},
            navigations: {$push: {_id: "$_id", title: "$title", url: "$url", referrerURL: "$referrerURL", startTimestamp: "$startTimestamp", timestamp: "$timestamp", duration: "$duration", harpyId: "$harpyId", pageType: "$pageType", userStep: "$userStep"}}
        }}
    ], function (err, navigationsDetails) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(navigationsDetails);
    })
};