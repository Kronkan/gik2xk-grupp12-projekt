import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, CardActionArea, Typography, Paper, Divider } from '@mui/material/';
import AddToCart from './AddToCart';
import MeanRating from './MeanRating';


function ProductItemSmall({ product, sx }) {
    
    return (
        <>
            <Paper elevation={3} sx={{ maxWidth: 345, borderRadius: '.5rem'}}>
                <Card variant='elevation' sx={{ borderRadius: '.5rem' }}>
                    <CardActionArea>
                        <Link to = {`/products/${product.productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <CardMedia
                                sx={{ height: 140, objectFit: 'cover', objectPosition: 'center', ...sx }}
                                image= {product.imageUrl}
                                title={product.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h6' component='div'>
                                {product.title}
                                </Typography>
                                <Divider />
              
                                <MeanRating productId={product.productId} />

                                <Typography variant='body2' color='text.secondary'>
                                {product.price} :-
                                </Typography>
                            </CardContent>
                        </Link>
                            <CardActions> 
                                <AddToCart productId={product.productId} /> 
                            </CardActions>
                    </CardActionArea>
                </Card>
            </Paper>
        </>    
    );
}

export default ProductItemSmall;

  