import { Grid, Box, Typography } from "@mui/material";
import ProductHandlerList from "../components/ProductHandlerList";
import UserHandlerList from "../components/UserHandlerList";

function Admin() {
    return ( 
        
        <Box sx={{ flexGrow: 1, width: '100%', mt: 2 }}>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        <Typography variant="h5" gutterBottom component="div">
                            Handle Products:
                        </Typography>
                        <ProductHandlerList />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        <Typography variant="h5" gutterBottom component="div">
                            Handle Users:
                        </Typography>
                        <UserHandlerList />
                    </Box>
                </Grid>
            </Grid>
        </Box>
       
    );
}

export default Admin;