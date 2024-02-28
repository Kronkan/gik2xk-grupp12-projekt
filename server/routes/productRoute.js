const router = require('express').Router();
const db = require('../models');
const productService = require('../services/productService');


router.get('/', (req, res) => {
    productService.getAll().then((result) => {
        res.status(result.status).json(result.data);
    });  
});

//En route för att hämta EN produkt baserad på ID

//En route för att hämta EN rating baserad på ID

router.post('/', (req, res) => {
    const product = req.body;
    productService.create(product).then((result) => {
        res.status(result.status).json(result.data);
    }); 

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