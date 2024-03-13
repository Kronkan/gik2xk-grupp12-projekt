import { styled } from '@mui/material/styles';
import {Box,  Rating, Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addRating } from '../services/ProductService';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47', 
    },
  });


function AddRating( {productId} ) {
    
    const handleRatingChange = async (event, newValue) => {
        const userId = 1;
        try {
            await addRating(productId, userId, newValue);
            console.log('Rating successfully added!');
        } catch (error) {
                console.error('Rating could not be added', error)
            }
    };

    return ( 
        <Box sx={{ '& > legend': { mt: 2 } }}>
        <Typography component="legend">Add Rating</Typography>
            <StyledRating
            name="customized-color"
            onChange={handleRatingChange}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={0.1} 
            icon={<FavoriteIcon fontSize="inherit" />} 
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
      </Box>
     );
}

export default AddRating; 