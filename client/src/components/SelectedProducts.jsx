import { Grid } from '@mui/material';
import { useProduct } from '../contexts/ProductContext';
import ProductItemSmall from './ProductItemSmall';


function SelectedProducts() {
    
    const { products } = useProduct();
    const latestProducts = products.sort((a, b) => new Date (b.createdAt) - new Date (a.createdAt)).slice(0, 3);
    
    return (
        <Grid container spacing={2}> 
            {latestProducts.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={`latestProduct_${product.productId}`}>
                    <ProductItemSmall product = {product} />
                </Grid>
            ))}
        </Grid>
     );
}

export default SelectedProducts;