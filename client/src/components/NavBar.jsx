import { Box, AppBar, Toolbar } from '@mui/material';
// import { Link, Outlet } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
import HomeLogo from './HomeLogo';
import Menu from './Menu';
import CartLogo from './CartLogo';
import SearchBar from './SearchBar';
import { useState } from "react";

function NavBar() {

    return ( 
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <HomeLogo />
                        <Menu />
                    </Box>
                    
                    {/* Centrera SearchBar med absolut positionering */}
                    <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
                        <SearchBar />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CartLogo /> 
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;