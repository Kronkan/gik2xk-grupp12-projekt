import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton, Box, Typography, Tooltip } from '@mui/material';

function HomeLogo() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Tooltip title='Returns you to homepage'>
                <IconButton component={Link} to='/home' color='inherit'>
                    <HomeIcon />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Kvast&apos;s E-handel
                    </Typography>
                </IconButton>
            </Tooltip>
        </Box>
    );
}

export default HomeLogo;