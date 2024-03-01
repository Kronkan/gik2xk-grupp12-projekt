const router = require('express').Router();
const productService = require('../services/productService');


//En route för att hämta EN rating baserad på ID
router.get('/:id/getRating', (req, res) => {

});



router.post('/:id/addRating', (req, res) => {
    const productId = req.params.id;
    const {userId, rating} = req.body;
    productService.addRating(userId, productId, rating).then((result) => {
        res.status(result.status).json(result.data);
    });
});




router.post('/:id/addToCart', (req, res) => {
    const productId = req.params.id;
    const {userId, amount} = req.body;
    productService.addToCart(userId, productId, amount).then((result) => {
        res.status(result.status).json(result.data); 
    });
});



//En route för att hämta EN produkt baserad på ID
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    productService.getById(productId).then((result) => {
        res.status(result.status).json(result.data);
    });  
});



router.get('/', (req, res) => {
    productService.getAll().then((result) => {
        res.status(result.status).json(result.data);
    });  
});



router.post('/', (req, res) => {
    const product = req.body;
    productService.create(product).then((result) => {
        res.status(result.status).json(result.data);
    }); 

});



router.put('/', (req, res) => {
    const product = req.body;
    const productId = product.productId;

    productService.update(product, productId).then((result) => {
        res.status(result.status).json(result.data);
    });
});



router.delete('/', (req, res) => {
    const productId = req.body.productId;
    productService
    .destroy(productId).then((result) => {
        res.status(result.status).json(result.data);
    })
});        


module.exports = router;