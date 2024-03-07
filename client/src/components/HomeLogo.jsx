import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';

function HomeLogo() {
    return (
        <>
            <IconButton component = { Link } to = '/' color = 'inherit'>   
                <HomeIcon />
            </IconButton>
        </>
    );
}

export default HomeLogo;