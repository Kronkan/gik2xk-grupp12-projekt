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

async function update(product, product_id) {
    const invalidData = validate(product_id, constraints);
    if(!product_id) {
        return createResponseError(422, 'Id is mandatory');
    } 
    if (invalidData) {
        return createResponseError(422, invalidData);
    }
    try {
        await db.product.update(product, {
            where: { product_id }
        });
        return createResponseMessage(200, `The product with ${product_id} has been updated`)
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}
   

async function destroy(product_id) {
    if(!product_id) {
        return createResponseError(422, 'Id is mandatory');
    } 
    try {
        await db.product.destroy({
            where: { product_id }
        });
        return createResponseMessage(200, `The product has been destroyed`)
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

module.exports = {getAll, create, update, destroy}
