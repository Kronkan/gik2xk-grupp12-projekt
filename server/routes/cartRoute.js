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
    db.cart.findAll().then((result) => {
        res.send(result);
    })  
});

router.post('/', (req, res) => {
    const cart = req.body;
    const invalidData = validate(cart, constraints);
    if(invalidData) {
        res.status(400).json(invalidData);
    } else {
        db.cart.create(cart).then((result) => {
            res.send(result);
        })
    }
});

router.put('/', (req, res) => {
    const cart = req.body;
    const invalidData = validate(cart, constraints);
    const id = cart.cart_id;
    if(invalidData || !id) {
        res.status(400).json(invalidData || 'ID required!');
    } else {
        db.cart
            .update(cart, {
            where: {
            cart_id: id
            }
        }).then((result) => {
            res.send(result);
        });
    } 
});

// Ska inte ta bort varukorgen, utan varan i varukorgen
router.delete('/', (req, res) => {
    db.cart
    .destroy({
        where: {
            cartid: req.body.cartid
        }
    }).then((result) => {
        res.json('cart destroyed');
    });
});

module.exports = router;