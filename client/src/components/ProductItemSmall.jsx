// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, CardActionArea, Button, Typography, Paper } from '@mui/material/';
import AddToCart from './AddToCart';
// import MeanRating from './MeanRating';
// import { getAllRatings } from '../services/ProductService';





function ProductItemSmall({ product }) {
    // const [ratings, setRatings] = useState([]);

    // useEffect(() => {
        
    //     const fetchRatings = async () => {
    //         const data = await getAllRatings(product.productId);
    //         setRatings(data);
    //     };

    //     fetchRatings();
    // }, [product.productId]);
    return (
        <>
            <Paper elevation={3} sx={{ maxWidth: 345, borderRadius: '1rem'}}>
                <Card variant='elevation' sx={{ borderRadius: '1rem' }}>
                    <CardActionArea>
                        <Link to = {`/products/${product.productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image= {product.imageUrl}
                                title={product.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                {product.title}
                                </Typography>

                                {/* <MeanRating ratings={ratings} productId={product.productId} /> */}

                                <Typography variant="body2" color="text.secondary">
                                {product.price} :-
                                </Typography>
                            </CardContent>
                        </Link>
                            <CardActions> 
                                <Button size="small">Learn more</Button>
                                <AddToCart /> 
                            </CardActions>
                    </CardActionArea>
                </Card>
            </Paper>
        </>    
    );
}

export default ProductItemSmall;

  