import { Box, AppBar, Toolbar, Grid } from '@mui/material';
import HomeLogo from './HomeLogo';
import Menu from './Menu';
import CartLogo from './CartLogo';
import SearchBar from './SearchBar';
import SignOutLogo from './SignOutLogo';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function NavBar() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ backgroundColor: '#c2b280' }}>
                <Toolbar disableGutters sx={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Box sx={{ width: '100%' }}>
                        <Grid container spacing={2} alignItems='center' justifyContent='center'> 
                            <Grid item xs={12} sm='auto' sx={{ order: isSmallScreen ? 1 : 0, display: 'flex', justifyContent: 'center'}}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                    <HomeLogo />
                                    {!isSmallScreen && <Menu />}
                                </Box>
                            </Grid>

                            {isSmallScreen && (
                                <Grid item xs={12} sx={{ order: 2, display: 'flex', justifyContent: 'center'}}>
                                    <Menu />
                                </Grid>
                            )}

                            {isSmallScreen && (
                                <Grid item xs={12} sx={{ order: 3, display: 'flex', justifyContent: 'center'}}>
                                    <SearchBar />
                                </Grid>
                            )}

                            <Grid item xs={12} sm='auto' sx={{ order: isSmallScreen ? 4 : 2, display: 'flex', gap: 1, justifyContent: 'center' }}>
                                <CartLogo />
                                <SignOutLogo />
                            </Grid>

                            {!isSmallScreen && (
                                <Grid item xs={12} sm sx={{ order: isSmallScreen ? -1 : 1, display: 'flex', justifyContent: 'center'}}>
                                    <SearchBar />
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;

