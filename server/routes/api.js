const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var School = require('../models/schoolModel')


mongoose.connect('mongodb://localhost/mergedSchoolDataset');


/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

// Get 10 schools
router.get('/get', (req, res) => {

    School.find()
        .limit(10)
        .exec(function (err, posts) {
            if (err) {
                res.json();
                res.send(err);
            } else {
                res.json(posts);
            }
        });


});

// Get all Schools matching School_name param
router.get('/get/:id', (req, res) => {
    console.log(req.params.id);
    School.find({ "School_name": { "$regex": req.params.id, "$options": "i" }})
        .limit(10)
        .exec(function (err, posts) {
            if (err) {
                res.json();
                res.send(err);
            } else {
                res.json(posts);
            }
        });
});

// Get Multi from AgeID Param
router.get('/getID/multi/:id', (req, res) => {
    console.log(req.params.id);
    School.find({ "AgeID": { "$in": req.params.id.split(',')}})
        .limit(4)
        .exec(function (err, posts) {
            if (err) {
                res.json();
                res.send(err);
            } else {
                res.json(posts);

                console.log(posts);
            }
        });
});



// Get Single from AgeID Param
router.get('/getID/:id', (req, res) => {
    console.log(req.params.id);
    
    School.findOne({"AgeID": req.params.id})
        .exec(function (err, posts) {
            if (err) {
                res.json();
                res.send(err);
            } else {
                res.json(posts);

                console.log(posts);
            }
        });
});
module.exports = router;