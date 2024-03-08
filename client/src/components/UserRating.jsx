import { Box, Rating, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function UserRating({ rating }) { 

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
                    defaultValue={rating.rating}
                    precision={0.1}
                    readOnly
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                </Stack>
            </Box>    
                <p>{rating.user.firstName}</p>
                <p>{rating.createdAt}</p>
        </>
    );    
}

export default UserRating;