const router = require('express').Router();
const userService = require('../services/userService');


router.get('/:id/getCart/', (req, res) => {
    const userId = req.params.id;
    userService.getCart(userId).then((result) => {
        res.status(result.status).json(result.data);
    });
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
    const userId = user.userId;
    if(invalidData || !userId) {
        res.status(400).json(invalidData || 'ID required!');
    } else {
        db.user
            .update(user, {
            where: {
            userId: userId
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
            userId: req.body.userId
        }
    }).then((result) => {
        res.json('user destroyed');
    });
});

module.exports = router;