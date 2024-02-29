const router = require('express').Router();
const db = require('../models');
const validate = require('validate.js');
const constraints = {
    email: {
        length: {
            minimum: 4,
            maximum: 200,
            tooShort: '^The emailadress needs to be at least %{count} characters long.',
            tooLong: '^The emailadress cannot be longer than %{count} characters.'
        },
        email: {
            message: '^The emailadress is not valid.'
        }  
    }
};

router.get('/:id/getCart', (req, res) => {
});

router.get('/', (req, res) => {
    db.user.findAll().then((result) => {
        res.send(result);
    })  
});

router.post('/', (req, res) => {
    const user = req.body;
    const invalidData = validate(user, constraints);
    if(invalidData) {
        res.status(400).json(invalidData);
    } else {
        db.user.create(user).then((result) => {
            res.send(result);
        })
    }
});

router.put('/', (req, res) => {
    const user = req.body;
    const invalidData = validate(user, constraints);
    const id = user.user_id;
    if(invalidData || !id) {
        res.status(400).json(invalidData || 'ID required!');
    } else {
        db.user
            .update(user, {
            where: {
            user_id: id
            }
        }).then((result) => {
            res.send(result);
        });
    } 
});

router.delete('/', (req, res) => {
    db.user
    .destroy({
        where: {
            userid: req.body.userid
        }
    }).then((result) => {
        res.json('user destroyed');
    });
});

module.exports = router;