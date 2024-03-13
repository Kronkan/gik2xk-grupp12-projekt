import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton, Box, Typography } from '@mui/material';

function HomeLogo() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton component={Link} to='/' color='inherit'>
                <HomeIcon />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Kvast&apos;s E-handel
                </Typography>
            </IconButton>

        </Box>
    );
}

export default HomeLogo;