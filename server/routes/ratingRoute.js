const router = require('express').Router();
const db = require('../models');
const validate = require('validate.js');


router.get('/', (req, res) => {
    db.rating.findAll().then((result) => {
        res.send(result);
    })  
});

router.post('/', (req, res) => {
    const rating = req.body;
    const invalidData = validate(rating, constraints);
    if(invalidData) {
        res.status(400).json(invalidData);
    } else {
        db.rating.create(rating).then((result) => {
            res.send(result);
        })
    }
});

router.put('/', (req, res) => {
    const rating = req.body;
    const invalidData = validate(rating, constraints);
    const ratingId = rating.ratingId;
    if(invalidData || !ratingId) {
        res.status(400).json(invalidData || 'ID required!');
    } else {
        db.rating
            .update(rating, {
            where: {
                ratingId: ratingId
            }
        }).then((result) => {
            res.send(result);
        });
    } 
});

router.delete('/', (req, res) => {
    db.rating
    .destroy({
        where: {
            ratingId: req.body.ratingId
        }
    }).then((result) => {
        res.json('rating destroyed');
    });
});

module.exports = router;