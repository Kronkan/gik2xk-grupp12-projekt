import { useContext } from 'react';
import ProductItemSmall from "./ProductItemSmall";
import { Grid } from '@mui/material';
import { ProductContext } from '../contexts/ProductContext';


function ProductList() {

    const { products } = useContext(ProductContext);

    return (
        products.length > 0 ? (
            products.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={`products_${product.productId}`}>
                    <ProductItemSmall product = {product} />
                </Grid>
            ))    
        ) : (
            <h3>Could not fetch product</h3>  
        )
    );
}

export default ProductList;
