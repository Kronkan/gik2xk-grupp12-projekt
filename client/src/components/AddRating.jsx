import { styled } from '@mui/material/styles';
import { Box,  Rating, Tooltip, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addRating } from '../services/ProductService';
import { useAuth } from '../contexts/AuthContext';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47', 
    },
  });


function AddRating( {productId, onRatingAdded} ) {
  const { currentUser } = useAuth();
    
  const handleRatingChange = async (event, newValue) => {
      const userId = currentUser.userId;
      try {
          await addRating(productId, userId, newValue);
          console.log('Rating successfully added!');
          onRatingAdded();
      } catch (error) {
              console.error('Rating could not be added', error)
          }
  };

  return ( 
      <Box sx={{ '& > legend': { mt: 2 } }}>
        <Typography component="legend">
          Add Rating
        </Typography>
        <Tooltip title='Click to add your rating'>
          <StyledRating
          name="customized-color"
          onChange={handleRatingChange}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.1} 
          icon={<FavoriteIcon fontSize="inherit" />} 
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </Tooltip>
    </Box>
    );
}

export default AddRating; 