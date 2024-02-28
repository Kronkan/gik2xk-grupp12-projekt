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
    const id = product.product_id;

    productService.update(product, id).then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.delete('/', (req, res) => {
    const product_id = req.body.product_id;
    productService
    .destroy(product_id).then((result) => {
        res.status(result.status).json(result.data);
    })
});        

module.exports = router;