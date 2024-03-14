import { Box, AppBar, Toolbar, Grid } from '@mui/material';
import HomeLogo from './HomeLogo';
import Menu from './Menu';
import CartLogo from './CartLogo';
import SearchBar from './SearchBar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function NavBar() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar disableGutters sx={{
                    flexDirection: isSmallScreen ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                        <Grid item xs={12} sm="auto">
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <HomeLogo />
                                <Menu />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm="auto" sx={{ flexGrow: 1, my: isSmallScreen ? 1 : 0 }}>
                            <SearchBar />
                        </Grid>

                        <Grid item xs={12} sm="auto">
                            <CartLogo />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;

