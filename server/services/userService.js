const db = require('../models');
const {
    createResponseSuccess, 
    createResponseError, 
    createResponseMessage
} = require('../helpers/responseHelper');
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


// async function getCart(userId) {
//     try {
//         const cart = await db.cart.findOne({
//             where: { userId: userId, payed: false },
//             order: [['createdAt', 'DESC']]
//         });

//         if (!cart) {
//             return createResponseError(404, 'This cart does not exist!');
//         }

//         const cartRows = await cart.cart_row.findAll({
//             where: { cartId: cart.cartId },
//             include: [{model: db.product}]
//         });

//         const products = cartRows.map(row => ({
//                 productId: row.productId,
//                 title: row.product.title,
//                 price: row.product.price * row.amount,
//                 amount: row.amount,
//         }));

//         const totalPrice = cartRows.reduce((total, row) => {
//             return total + (row.product.price * row.amount);
//         }, 0);

//         const formattedCart = {
//             cartId: cart.cartId,
//             products: products,
//             totalPrice: totalPrice
//         };
            
//         return createResponseSuccess(formattedCart);
//     } catch (error) {
//         return createResponseError(error.status, error.message);
//     }
// }

async function getCart(userId) {
    try {
        const cart = await db.cart.findOne({
            where: { userId: userId, payed: false },
            order: [['createdAt', 'DESC']]
        });

        if (!cart) {
            return createResponseError(404, 'This cart does not exist!');
        }

        const cartRows = await db.cart_row.findAll({
            where: { cartId: cart.cartId },
        });

        let products = [];
        let totalPrice = 0;

        for (const row of cartRows) {
            const product = await db.product.findByPk(row.productId);
            const productTotalPrice = row.amount * product.price;
            totalPrice += productTotalPrice;

            products.push({
                productId: product.productId,
                title: product.title,
                price: product.price,
                amount: row.amount,
                totalPricePerRow: productTotalPrice,
            });
        }

        const formattedCart = {
            cartId: cart.cartId,
            products: products,
            totalPrice: totalPrice
        };
            
        return createResponseSuccess(formattedCart);
    } catch (error) {
        console.error(error);
        return createResponseError(error.status, error.message);
    }
}

module.exports = {
    getCart
};