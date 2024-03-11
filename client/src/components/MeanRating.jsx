import React, { useState, useEffect } from 'react';
import { Box, Rating, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { getAllRatings } from '../services/ProductService';



function MeanRating({ productId }) {

    // const productRatings = ratings.filter(rating => Number(rating.productId) === Number(productId));
    // const meanRating = productRatings.length > 0
    //     ? productRatings.reduce((acc, curr) => acc + Number(curr.rating), 0) / productRatings.length
    //     : 0;

    const [ratings, setRatings] = useState([]);
    const [meanRating, setMeanRating] = useState(0);

    useEffect(() => {
        const fetchRatings = async () => {
            const data = await getAllRatings(productId);
            if (data && data.length > 0) {
                const calculatedMeanRating = data.reduce((acc, curr) => acc + curr.rating, 0) / data.length;
                setMeanRating(calculatedMeanRating);
            }
            setRatings(data || []);
        };

        fetchRatings();
    }, [productId]);


    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
        color: '#ff6d75',
        },
        // '& .MuiRating-iconHover': {
        //   color: '#ff3d47',
        // },
    });

    return (
        <>
            <Box sx={{'& > legend': { mt: 2 },}}>
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
        </>
    );
}
export default MeanRating;



