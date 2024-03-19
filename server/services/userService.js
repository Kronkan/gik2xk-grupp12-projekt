const db = require('../models');
const {
    createResponseSuccess, 
    createResponseError, 
    createResponseMessage
} = require('../helpers/responseHelper');
const validate = require('validate.js');
const constraints = {
    email: {
        presence: true,
        email: {
            message: '^Please enter a valid email address.'
        },
        length: {
            minimum: 4,
            maximum: 200,
            tooShort: '^The emailadress needs to be at least %{count} characters long.',
            tooLong: '^The emailadress cannot be longer than %{count} characters.'
        }  
    },
    password: {
        presence: true,
        length: {
            minimum: 8,
            maximum: 50,
            tooShort: '^The password needs to be at least %{count} characters long.',
            tooLong: '^The password cannot be longer than %{count} characters.'
        },
        format: {
            pattern: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            message: '^The password must contain at least one letter and one number.'
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

async function setupCart(userId) {
    try {
        let cart = await db.cart.findOne({
            where: { 
                userId: userId, 
                payed: false 
            }

        });
        if (!cart) {
            cart = await db.cart.create({
                userId: userId,
                payed: false
            });
        }
        return createResponseSuccess(cart);
    } catch (error){
        return createResponseError(error.status, error.message);
    }   
}    

async function getAuth(email, password) {
    // Hämta user
    try {
        const user = await db.user.findOne({where: {email, password}});
        // Returnera userId till frontend
        if(!user) {
            return createResponseError(404, 'User not found or password incorrect.');
        }
        
        await setupCart(user.userId);

        return createResponseSuccess({ userId: user.userId });
    } catch (error){
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
    getAuth,
    create,
    update,
    destroy
};