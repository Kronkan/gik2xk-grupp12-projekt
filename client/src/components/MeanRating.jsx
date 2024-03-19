import { useState, useEffect } from 'react';
import { Box, Rating, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { getAllRatings } from '../services/ProductService';


function MeanRating({ productId, key }) {

    const [ratings, setRatings] = useState([]);
    const [meanRating, setMeanRating] = useState(0);

    const formattedMeanRating = parseFloat(meanRating).toFixed(1);

    useEffect(() => {
        const fetchRatings = async () => {
            const ratingData = await getAllRatings(productId);
            if (ratingData && ratingData.length > 0) {
                const calculatedMeanRating = ratingData.reduce((acc, curr) => acc + curr.rating, 0) / ratingData.length;
                setMeanRating(calculatedMeanRating);
            }
            setRatings(ratingData || []); 
        };

        fetchRatings();
    }, [productId, key]);


    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
        color: '#ff6d75',
        }
    });

    return (
            <Box sx={{'& > legend': { mt: 2 },}}>
            <Typography>Average rating: {formattedMeanRating} hearts.</Typography>
                <Stack spacing={1}>
                    <StyledRating
                    name="customized-color"
                    value={meanRating}
                    precision={0.1}
                    readOnly
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                </Stack>
            </Box>    
    );
}
export default MeanRating;



