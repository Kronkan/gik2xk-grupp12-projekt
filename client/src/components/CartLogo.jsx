import { useState } from 'react';
import { Box, Drawer, List, Divider, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
          <List>
            {userCart.map((cartItem, index ) => (
              <ListItem key={index} disablePadding>
                <Grid container spacing = {2} direction= 'row' alignItems='center' justifyContent= 'space-evenly'>
                  {/* Produkt titel */}
                  <Grid item xs={4}>
                    <ListItemText primary = {`${cartItem.title}`} />
                  </Grid>
                  {/* Mängden varor + increase/decrease amount */}
                  <Grid item container xs={5} alignItems='center' justifyContent= 'center'>
                    {/*Minus button*/}
                    <Grid item>
                      <IconButton onClick={() => handleDecrease(cartItem.productId)}> 
                        <RemoveCircleOutlineIcon/>
                      </ IconButton>
                    </Grid>
                     {/*Amount*/}
                    <Grid item>
                      <ListItemText primary = {cartItem.amount} />
                    </Grid>
                     {/*Plus button*/}
                    <Grid item xs={3}>
                      <IconButton onClick={() => handleIncrease(cartItem.productId)}> 
                        <AddCircleOutlineIcon /> 
                      </ IconButton>  
                    </Grid>
                  </Grid>
                  {/*cartItem pris*/}
                  <Grid item>
                    <ListItemText primary = {`${cartItem.price} :-`} /> 
                  </Grid>
                </Grid>
              </ListItem> 
            ))}
              {/*Totala priset*/}
              <Divider />
              <ListItem disablePadding>
                <ListItemText primary={`Total Price: ${totalPrice}` }/>
              </ListItem>
          </List>
      </Box>
    );
  
    return (
      <div>
        <IconButton onClick={toggleDrawer(true)} color = 'inherit'>
            <ShoppingCartIcon />
        </IconButton>
        <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    );
}

export default CartLogo; 