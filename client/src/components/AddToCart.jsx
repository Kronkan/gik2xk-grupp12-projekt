import { Typography, Button } from '@mui/material';
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

        <Button
        variant="contained"
        color="primary"
        startIcon={<AddShoppingCartIcon />}
        onClick={handleAddProduct}
        sx={{
            bgcolor: '#4caf50',
            padding: '.5rem 1rem', 
            '&:hover': {
                bgcolor: '#1b5e20',
            },
            boxShadow: 3
        }}
        >
        <Typography variant="body2" component="span">
            Add to cart
        </Typography>
        </Button>
    );
}

export default AddToCart; 