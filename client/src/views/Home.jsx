import { Grid } from '@mui/material';
import HomeBanner from '../components/HomeBanner';
import ProductBanner from '../components/ProductBanner';
import SelectedProducts from '../components/SelectedProducts';

function Home() {
    return (
        <Grid
            container
            direction='column'
            justifyContent='space-evenly'
            alignItems='stretch'
            >   
            <Grid item xs={12}>   
                <HomeBanner />
            </Grid> 
            <Grid item xs={12}>
                <ProductBanner />
            </Grid>
            <Grid item xs={12}>
                <SelectedProducts />
            </Grid>
        </Grid>   
    );
}

export default Home;