import { useState } from 'react';
import { Box, Drawer, Typography, List, Divider, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { addToCart, removeFromCart } from '../services/ProductService';
import { useCart } from '../contexts/CartContext.jsx';


function CartLogo()  {
    const [open, setOpen] = useState(false);

    const { userCart, totalPrice, fetchCart } = useCart();

    const handleIncrease = async (productId) => {
      const userId = 1;
      try {
        await addToCart(userId, productId, 1);
        fetchCart();
      } catch (error) {
        console.error('Could not increase productamount', error);
      }
    };
    
    const handleDecrease = async (productId) => {
      const userId = 1;
      try {
        await removeFromCart(userId, productId, 1);
        fetchCart();
      } catch (error) {
        console.error('Could not decrease productamount', error);
      }
    };
    
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    const DrawerList = (                             
      <Box sx={{ width: 250 }} role='presentation'>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
          <List>
            {userCart.map((cartItem, index ) => (
              <ListItem key={index} disablePadding>
                <Grid container spacing = {2} direction= 'row' alignItems='center' justifyContent= 'space-evenly'>
                  <Grid item xs={4}>
                    <ListItemText primary = {`${cartItem.title}`} />
                  </Grid>
                  <Grid item container xs={5} alignItems='center' justifyContent= 'center'>
                    <Grid item>
                      <IconButton onClick={() => handleDecrease(cartItem.productId)}> 
                        <RemoveCircleOutlineIcon/>
                      </ IconButton>
                    </Grid>
                    <Grid item>
                      <ListItemText primary = {cartItem.amount} />
                    </Grid>
                    <Grid item xs={3}>
                      <IconButton onClick={() => handleIncrease(cartItem.productId)}> 
                        <AddCircleOutlineIcon /> 
                      </ IconButton>  
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ListItemText primary = {`${cartItem.price} :-`} /> 
                  </Grid>
                </Grid>
              </ListItem> 
            ))}
              <Divider />
              <ListItem disablePadding>
                <ListItemText primary={`Total Price: ${totalPrice}` }/>
              </ListItem>
          </List>
      </Box>
    );
  
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={toggleDrawer(true)} color = 'inherit'>
            <ShoppingCartIcon />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Cart
            </Typography>
        </IconButton>
        <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    );
}

export default CartLogo; 