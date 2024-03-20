import { Typography, Rating, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { toDateTimeString } from '../common/formatHelper';


function UserRating({ rating }) { 

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#ff6d75',
        }
      });    

    return (
      <Stack spacing={1} sx={{'& > legend': { mt: 2 },}}>
          <StyledRating
            name='customized-color'
            value={rating.rating}
            precision={0.1}
            readOnly
            icon={<FavoriteIcon fontSize='inherit' />}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
          />
          <Typography variant='subtitle2'>{rating.user.firstName}
          </Typography>
          <Typography variant='body2'>{toDateTimeString(rating.createdAt)}
          </Typography>
      </Stack>   
    );    
}

export default UserRating;