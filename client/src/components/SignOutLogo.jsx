import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Box, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


function SignOutLogo() {
    
    const signOut = useAuth();
    
    return ( 
    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2  }}>
        <Tooltip title='Sign out'>
            <IconButton component={Link} to='/' color='inherit' onClick={signOut}>
                <LogoutIcon />
            </IconButton>
        </Tooltip>
    </Box>
     );
}

export default SignOutLogo;