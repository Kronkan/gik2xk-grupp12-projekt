import axios from './api';

export async function addRating(productId, rating) {
    try {
        const response = await axios.post(`/product/${productId}/addRating`, rating);
        if(response.status === 200) return response.data;
        else {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
}


export async function getAllRatings(productId) {
    try {
        const response = await axios.get(`/product/${productId}/getAllRatings`);
        if(response.status === 200) return response.data;
        else {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
}


export async function addToCart(userId, productId, amount) {
    try {
        const response = await axios.post(`product/${productId}/addToCart`, userId, productId, amount);
        if(response.status === 200) return response.data;
        else {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
}


export async function getById(productId) {
    try {
        const response = await axios.get(`/product/${productId}`);
        if(response.status === 200) return response.data;
        else {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }

}


export async function getAll() {
    try {
        const response = await axios.get("/product");

    if(response.status === 200) return response.data;
    else {
        console.log(response.data);
        return [];
    }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
}


export async function create(product) {
    try {
        const response = await axios.post('/products', product);
        if (response.status === 200) return response.data;
        else {
            console.log(response.data);
            return null;
        }  
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
    
}


export async function update(product) {
    try {
        const response = await axios.put('/product', product)
        if(response.status === 200) return response.data;
        else {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
}


export async function remove(productId) {
    try {
        const response = await axios.delete(`/product`, { data: { productId } });
        if(response.status === 200) return response.data;
        else {
            console.log(response.data);
            return null;
        }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
}







