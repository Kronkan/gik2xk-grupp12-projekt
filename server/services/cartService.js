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
            message: '^The image URL is not valid.'
        }
    }
};

async function getAll() {
    try {
        const allCarts = await db.cart.findAll();
        return createResponseSuccess(allCarts);
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}


async function create(cart) {
    const invalidData = validate(cart, constraints);
    if(invalidData) {
        return createResponseError(422, invalidData);
    } else {
        try {
            const newCart = await db.cart.create(cart);
            return createResponseSuccess(newCart);
        } catch (error) {
            return createResponseError(error.status, error.message);
        }
    }
}


function update() {

}


function destroy() {

}

module.exports = {getAll, create, update, destroy}