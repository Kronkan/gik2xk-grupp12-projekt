import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Link, Outlet } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
import HomeLogo from './HomeLogo';
import Menu from './Menu';
import CartLogo from './CartLogo';

function NavBar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <HomeLogo />
                        <Menu />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Menu
                        </Typography>
                        <CartLogo />
                    </Toolbar>
                </AppBar>
            </Box>;
        </> 
    )
}

export default NavBar;