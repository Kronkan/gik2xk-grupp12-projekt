import { AppBar, Box, Toolbar, Typography } from '@mui/material/';


function EmptyNavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#c2b280' }}>
            <Toolbar sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Welcome to Kvast&apos;s E-handel!
                </Typography> 
            </Toolbar>
        </AppBar>
        </Box> 
     );
}

export default EmptyNavBar;