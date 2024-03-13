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
            bgcolor: '#4caf50', 
            color: 'white',
            padding: '.1rem .5rem', 
            borderRadius: '.5rem',
            '&:hover': { bgcolor: '#1b5e20' },
            width: 130,
            height: 40,
            boxShadow: 3 
            }} 
            onClick={handleAddProduct}>
            <IconButton color="inherit">
                <AddShoppingCartIcon />
                <Typography variant="body2" sx={{ marginRight: 1 }}>
                    Add to cart
                </Typography>
            </IconButton>
            
        </Box>
    );
}

export default AddToCart; 