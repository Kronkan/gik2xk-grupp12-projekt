const router = require('express').Router();
const db = require('../models');
const validate = require('validate.js');
const constraints = {
    title: {
        length: {
            minimum: 2,
            maximum: 100,
            tooShort: '^The title needs to be at least %{count} characters long.',
            tooLong: '^The title cannot be longer than %{count} characters.'
        }  
    },
    imageUrl: {
        url: {
            message: '^The image URL is not valid.'
        }
    }
};

router.get('/', (req, res) => {
    db.product.findAll().then((result) => {
        res.send(result);
    })  
});

//En route för att hämta EN produkt baserad på ID

//En route för att hämta EN rating baserad på ID

router.post('/', (req, res) => {
    const product = req.body;
    const invalidData = validate(product, constraints);
    if(invalidData) {
        res.status(400).json(invalidData);
    } else {
        db.product.create(product).then((result) => {
            res.send(result);
        })
    }
});

router.put('/', (req, res) => {
    const product = req.body;
    const invalidData = validate(product, constraints);
    const id = product.product_id;
    if(invalidData || !id) {
        res.status(400).json(invalidData || 'ID required!');
    } else {
        db.product
            .update(product, {
            where: {
            product_id: id
            }
        }).then((result) => {
            res.send(result);
        });
    } 
});

router.delete('/', (req, res) => {
    db.product
    .destroy({
        where: {
        product_id: req.body.product_id
        }
    }).then((result) => {
        res.json('product destroyed!');
    });
});

module.exports = router;