import { Box, Rating, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    // '& .MuiRating-iconHover': {
    //   color: '#ff3d47',
    // },
  });

function MeanRating({ ratings, productId }) {

    // const productRatings = ratings.filter(rating => rating.productId === productId);
    // const meanRating = productRatings.length > 0
    // ? productRatings.reduce((acc, curr) => acc + Number(curr.rating), 0) / productRatings.length : 0;

    console.log(`Alla ratings för produktID ${productId}:`, ratings); 
    const productRatings = ratings.filter(rating => rating.productId === productId);
    console.log(`Filtrerade ratings för produktID ${productId}:`, productRatings); 

    const meanRating = productRatings.length > 0
        ? productRatings.reduce((acc, curr) => acc + Number(curr.rating), 0) / productRatings.length
        : 0;

    console.log(`Beräknat snittbetyg för produktID ${productId}:`, meanRating);



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



