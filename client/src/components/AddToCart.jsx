import { IconButton, Box, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../services/ProductService';
import { useCart } from '../contexts/CartContext.jsx';

function AddToCart({productId}) {
    const { fetchCart } = useCart();

    const handleAddProduct = async () => { 
        const userId = 1;
        try { 
            await addToCart(userId, productId, 1);
            fetchCart();
            console.log('Product successfully added to cart');  
        } catch (error) {
            console.error('Could not add product to cart')
        }
    }

    return (  
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            cursor: 'pointer',
            bgcolor: 'primary.main', 
            color: 'white',
            padding: '.1rem .5rem', 
            borderRadius: '.5rem', 
            '&:hover': { bgcolor: 'primary.dark' } 
            }} 
            onClick={handleAddProduct}>
            <IconButton color="inherit">
                <AddShoppingCartIcon />
            </IconButton>
            <Typography variant="body2" sx={{ marginRight: 1 }}>
                Add to cart
            </Typography>
        </Box>
    );
}

export default AddToCart; 