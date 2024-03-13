import { Grid, Box, Typography, Divider } from '@mui/material/';
import AddToCart from './AddToCart';
import MeanRating from './MeanRating';


function ProductItemLarge({ product }) {

    return (
        <Grid container justifyContent='center' spacing={2} sx={{ marginTop: 4, marginBottom: 4}}>

            <Grid item xs={12} md={3} justifyContent='end'>
                
                <Box
                    component='img'
                    sx={{ 
                    maxHeight: {xs: 233, sm: 350, md: 467, lg: 583, xl: 700},
                    maxWidth: {xs: 350, sm: 467, md: 583, lg: 700, xl: 700},
                    border: 'solid', 
                    borderColor: '#e6e6e6',
                    borderRadius: '.2rem',
                }}
                alt={product.title}
                src={product.imageUrl}
                >
                </Box>
                <Divider sx={{my: 1}} />
                <MeanRating productId={product.productId} />                
            </Grid>

            <Divider orientation="vertical" flexItem sx={{ height: 'auto' }} />

            <Grid item xs={12} md={3}>
                <Typography gutterBottom variant='h4'>
                    {product.title}
                </Typography>
                <Divider sx={{my: 1}} />
                <Typography gutterBottom variant='body1' sx={{ whiteSpace: 'pre-wrap' }}>
                    {product.description.split('\\n').join('\n')} 
                </Typography>
                <Divider sx={{my: 1}}/>
                <Typography gutterBottom variant='h6'>
                    Price: {product.price} :-
                </Typography>
                <Divider sx={{my: 1}}/>
                <AddToCart productId={product.productId} />
            </Grid>
        </Grid>
    );
}


export default ProductItemLarge;