const db = require('../models');
const {
    createResponseSuccess, 
    createResponseError, 
    createResponseMessage
} = require('../helpers/responseHelper');
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
            message: '^The image URL provided, is not a valid URL.'
        }
    }
};

async function addRating(userId, productId, rating) {
    try {
        const product = await db.product.findOne({
            where: {
                productId: productId
            }
        });
        if (!product) {
            return createResponseError(422, 'This product does not exist!');
        }
        const newRating = await db.rating.create({
            rating: rating,
            userId: userId,
            productId: productId
        });
        return createResponseSuccess(`You rated this product with: ${newRating.rating} hearts, thank you!`);
        // return createResponseSuccess(newRating);  

    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

//THOMPES EXPERIMENTELLA ADDRATING
// async function addRating(userId, productId, rating) {
//     try {
//         // Kontrollera först att produkten existerar
//         const product = await db.product.findOne({
//             where: {
//                 productId: productId
//             }
//         });
//         if (!product) {
//             return createResponseError(422, 'This product does not exist!');
//         }

//         // Kontrollera om det redan finns en rating från denna användare för denna produkt
//         const existingRating = await db.rating.findOne({
//             where: {
//                 userId: userId,
//                 productId: productId
//             }
//         });

//         if (existingRating) {
//             // Uppdatera den befintliga ratingen om den finns
//             existingRating.rating = rating;
//             await existingRating.save();
//             return createResponseSuccess(`You've updated your rating to: ${existingRating.rating} hearts, thank you!`);
//         } else {
//             // Skapa en ny rating om ingen existerar
//             const newRating = await db.rating.create({
//                 rating: rating,
//                 userId: userId,
//                 productId: productId
//             });
//             return createResponseSuccess(`You rated this product with: ${newRating.rating} hearts, thank you!`);
//         }
//     } catch (error) {
//         // Hantera eventuella fel som kan uppstå
//         console.error('Error adding/updating rating:', error);
//         return createResponseError(error.status || 500, error.message || 'Internal Server Error');
//     }
// }
//SLUT THOMPES EXPERIMENTELLA ADDRATING


async function getAllRatings(productId) {
    try {
        const allRatings = await db.rating.findAll({
            where: {productId: productId},
            include: [{
                model: db.user,
                attributes: ['firstName']
            }]
        });
        
        
        const formattedRatings = allRatings.map(rating => ({
            productId: rating.productId,
            rating: rating.rating,
            createdAt: rating.createdAt,
            user: {
                firstName: rating.user.firstName
            }
        }));

        return createResponseSuccess(formattedRatings)
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}



async function addToCart(userId, productId, amount) {
    
    try {
        const product = await db.product.findOne({
            where: {
                productId: productId
            }
        });
        if (!product) {
            return createResponseError(422, 'This product does not exist!');
        }

        let cart = await db.cart.findOne({
            where: {
                userId: userId,
                payed: false
            },
            order: [['createdAt', 'DESC']]
        });

        if (!cart) {
            cart = await db.cart.create({
                userId: userId,
                payed: false
            });
        }

        let existingCartRow = await db.cart_row.findOne({
            where: {
                cartId: cart.cartId, 
                productId: productId
            }
        });

        existingCartRow ? await existingCartRow.increment({"amount": 1 }) : 
            await db.cart_row.create({
                cartId: cart.cartId,
                productId,
                amount: 1 
            });

        return createResponseSuccess({message: 'Product added to cart successfully!'});
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function getById(productId) {
    try {
        const product = await db.product.findOne({where: {productId}});
        return createResponseSuccess(product);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function getAll() {
    try {
        const allProducts = await db.product.findAll();
        return createResponseSuccess(allProducts);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function create(product) {
    const invalidData = validate(product, constraints);
    if(invalidData) {
        return createResponseError(422, invalidData);
    } else {
        try {
            const newProduct = await db.product.create(product);
            return createResponseSuccess(newProduct);
        } catch (error) {
            return createResponseError(error.status, error.message);
        }
    }
}

async function update(product, productId) {
    const invalidData = validate(productId, constraints);
    if(!productId) {
        return createResponseError(422, 'Id is required!');
    } 
    if (invalidData) {
        return createResponseError(422, invalidData);
    }
    try {
        await db.product.update(product, {
            where: { productId }
        });
        return createResponseMessage(200, `The product with ${productId} has been updated`)
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}
   

async function destroy(productId) {
    if(!productId) {
        return createResponseError(422, 'Id is required!');
    } 
    try {
        await db.product.destroy({
            where: { productId }
        });
        return createResponseMessage(200, `The product has been UTTERLY DISINTEGRATED!`)
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}



module.exports = {
    getAllRatings,
    addRating,
    addToCart,
    getById,
    getAll, 
    create, 
    update, 
    destroy
}