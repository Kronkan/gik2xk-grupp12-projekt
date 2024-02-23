const router = require('express').Router();
const db = require('../models');
const validate = require('validate.js');
// const constraints = {
//     email: {
//         length: {
//             minimum: 4,
//             maximum: 200,
//             tooShort: '^The emailadress needs to be at least %{count} characters long.',
//             tooLong: '^The emailadress cannot be longer than %{count} characters.'
//         },
//         email: {
//             message: '^The emailadress is not valid.'
//         }  
//     }
// };

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
    const id = rating.rating_id;
    if(invalidData || !id) {
        res.status(400).json(invalidData || 'ID required!');
    } else {
        db.rating
            .update(rating, {
            where: {
            rating_id: id
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
            ratingid: req.body.ratingid
        }
    }).then((result) => {
        res.json('rating destroyed');
    });
});

module.exports = router;