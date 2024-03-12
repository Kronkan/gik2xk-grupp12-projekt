import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../services/ProductService';
import { getCart } from '../services/UserService';
// import React, { useState, useEffect } from 'react';

function AddToCart({productId}) {

    // const [addProduct, setAddProduct] = useState(false);

    const handleAddProduct = async () => {
        const userId = 1;
        try {
            const response = await addToCart(userId, productId, 1);
            if(response) {
                console.log('Product successfully added to cart');  
            }
        } catch (error) {
            console.error('Could not add product to cart')
        }
    }

    return ( 
        <>
            <IconButton  color = 'inherit' onClick={handleAddProduct}>   
                <AddShoppingCartIcon />
            </IconButton>
        </>

    );
}

export default AddToCart;