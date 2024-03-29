import { Grid } from '@mui/material';
import { useProduct } from '../contexts/ProductContext';
import ProductItemSmall from './ProductItemSmall';


function ProductList() {

    const { products } = useProduct();

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
