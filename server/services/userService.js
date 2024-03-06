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
            include: [{model: db.product}]
        });

        const products = cartRows.map(row => ({
                productId: row.productId,
                title: row.product.title,
                price: row.product.price * row.amount,
                amount: row.amount,
        }));

        const totalPrice = cartRows.reduce((total, row) => {
            return total + (row.product.price * row.amount);
        }, 0);

        const formattedCart = {
            cartId: cart.cartId,
            products: products,
            totalPrice: totalPrice
        };
            
        return createResponseSuccess(formattedCart);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function getById(userId) {
    try {
        const user = await db.user.findOne({where: {userId}});
        return createResponseSuccess(user);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function getAll() {
    try {
        const allUsers = await db.user.findAll();
        return createResponseSuccess(allUsers);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

async function create(user) {
    const invalidData = validate(user, constraints);
    if(invalidData) {
        return createResponseError(422, invalidData);
    } else {
        try {
            const newUser = await db.user.create(user);
            return createResponseSuccess(newUser);
        } catch (error) {
            return createResponseError(error.status, error.message);
        }
    }
}

async function update(user, userId) {
    const invalidData = validate(userId, constraints);
    if(!userId) {
        return createResponseError(422, 'Id is required!');
    } 
    if (invalidData) {
        return createResponseError(422, invalidData);
    }
    try {
        await db.user.update(user, {
            where: { userId }
        });
        return createResponseMessage(200, `The user with id: ${userId} has been updated`)
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}
   

async function destroy(userId) {
    if(!userId) {
        return createResponseError(422, 'Id is required!');
    } 
    try {
        await db.user.destroy({
            where: { userId }
        });
        return createResponseMessage(200, `The user has been UTTERLY DISINTEGRATED!`)
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}


module.exports = {
    getCart,
    getById,
    getAll,
    create,
    update,
    destroy
};