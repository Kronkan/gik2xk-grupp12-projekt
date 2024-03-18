import {Box, Typography} from '@mui/material';

function ProductBanner() {
    return ( 

        <Box sx={{
            color: 'primary.contrastText',
            mb: 2,
            p: 2, 
            textAlign: 'center',
            justifyContent: 'center',
            height: '8vh',
            position: 'relative',
            backgroundColor:'#c2b280',

        }}>
            <Typography variant='h4' sx={{textShadow: '.2rem .2rem .8rem rgba(0, 0, 0, 0.7)', fontWeight: 'bold', fontStyle: 'italic'}} >
                Enjoy our latest creations:
            </Typography>
        </Box>
     );
}

export default ProductBanner;