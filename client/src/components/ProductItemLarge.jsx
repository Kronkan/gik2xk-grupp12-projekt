import { Grid, Box, Typography, Divider, useTheme, useMediaQuery } from '@mui/material/';
import AddToCart from './AddToCart';
import MeanRating from './MeanRating';
import AddRating from './AddRating';
import ShowProductRatings from './ShowProductRatings';


function ProductItemLarge({ product }) {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Box sx={{ marginTop: 4, marginBottom: 4 }}>
            <Grid container justifyContent="center" alignItems="start" spacing={2}>
                <Grid item xs={12} sm={matchesXS ? 12 : 6} md={5}>
                    <Box
                        sx={{
                            minWidth: '100%',
                            minHeight: 300, 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            border: '1px solid #b3b3b3', 
                            borderRadius: theme.shape.borderRadius,
                            boxShadow: theme.shadows[3],
                            mb: 2,
                        }}
                    >
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </Box>
                    <MeanRating productId={product.productId} />
                    <ShowProductRatings productId={product.productId} />
                </Grid>

                {matchesMD && !matchesXS && (
                    <Divider orientation="vertical" flexItem sx={{ height: 'auto', mx: 2 }} />
                )}

                <Grid item xs={12} sm={matchesXS ? 12 : 6} md={6} sx={{ pl: matchesMD ? 2 : 0, pt: matchesXS ? 2 : 0 }}>
                    <Typography gutterBottom variant='h4'>{product.title}</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography gutterBottom variant='body1' sx={{ whiteSpace: 'pre-wrap' }}>
                        {product.description.split('\\n').join('\n')}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography gutterBottom variant='h6'>Price: {product.price} :-</Typography>
                    <Divider sx={{ my: 1 }} />
                    <AddRating productId={product.productId} />
                    <Divider sx={{ my: 1 }} />
                    <AddToCart productId={product.productId} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductItemLarge;