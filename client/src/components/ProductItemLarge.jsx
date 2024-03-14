import { Grid, Box, Typography, Divider } from '@mui/material/';
import AddToCart from './AddToCart';
import MeanRating from './MeanRating';
import AddRating from './AddRating';
import ShowProductRatings from './ShowProductRatings';


function ProductItemLarge({ product }) {
    const imageSize = {
        width: 583, 
        height: 467
    };

    return (
        <Grid container justifyContent='center' spacing={2} sx={{ marginTop: 4, marginBottom: 4}}>

            <Grid item xs={12} sm={12} md={5} lg={4}>
                
                {/* <Box
                    component='img'
                    sx={{
                    // width: {xs: 350, sm: 467, md: 583, lg: 700, xl: 700},
                    // height: {xs: 233, sm: 350, md: 467, lg: 583, xl: 700},
                    minWidth: '60%',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    border: 'solid', 
                    borderColor: '#b3b3b3',
                    borderRadius: '.2rem',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}
                alt={product.title}
                src={product.imageUrl}
                >
                </Box> */}

                <Box
                    sx={{
                        width: imageSize.width, 
                        height: imageSize.height, 
                        overflow: 'hidden', 
                        display: 'flex', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'solid',
                        borderColor: '#b3b3b3',
                        borderRadius: '.2rem',
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                    }}
                >
                    <img
                        src={product.imageUrl}
                        alt={product.title}
                        style={{
                            width: '100%', 
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                </Box>


                <Divider sx={{my: 1}} />
                <MeanRating productId={product.productId} />  
                <ShowProductRatings productId={product.productId} />              
            </Grid>
            
            <Divider orientation="vertical" flexItem sx={{ height: 'auto' }} />
            
            <Grid item xs={12} sm={8} md={5} lg={4}>
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
                <AddRating productId={product.productId} rating={2} />
                <Divider sx={{my: 1}}/>
                <AddToCart productId={product.productId} />
            </Grid>
        </Grid>
    );
}


export default ProductItemLarge;