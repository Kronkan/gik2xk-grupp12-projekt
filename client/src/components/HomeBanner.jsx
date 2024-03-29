import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import backgroundImage from '../assets/assorted_food_banner.png';

function HomeBanner() {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return ( 
        <Box sx={{
            backgroundColor: '#c2b280', 
            color: 'primary.contrastText', 
            p: 2, 
            textAlign: 'center',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50vh',
            position: 'relative',
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    zIndex: 1, 
                }} />
                <Box sx={{
                    position: 'relative',
                    zIndex: 2, 
                }}>
                    <Typography variant={ matchesSM ? 'h2' : 'h1' } sx={{ fontWeight: 'bold', textShadow: '.2rem .2rem .8rem rgba(0, 0, 0, 0.7)' }}>
                        Welcome to Kvast&apos;s E-handel!
                    </Typography>
                    <Typography variant={ matchesSM ? 'h4' : 'h3' } sx={{ mt: 1 }}>
                        The best place to find good food on the interwebs.
                    </Typography>
                </Box>
        </Box>
    );
}

export default HomeBanner;