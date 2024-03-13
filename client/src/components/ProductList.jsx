import { useState, useEffect } from 'react';
import ProductItemSmall from "./ProductItemSmall";
import { Grid } from '@mui/material';
import { getAll } from '../services/ProductService';

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productData = await getAll();
            setProducts(productData);
        };

        fetchProducts();
    }, []);


    return (
        <Grid
            container
            spacing={2}
            sx={{ marginTop: 2, marginBottom: 2}} 
        >
            {products?.length > 0 ? (
                products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={`products_${product.productId}`}>
                        <ProductItemSmall product = {product} />
                    </Grid>
                ))    
            ) : (
                <h3>Could not fetch product</h3>  
            )}
           
        </Grid>
    );
}

export default ProductList;
