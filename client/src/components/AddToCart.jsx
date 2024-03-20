import { Typography, Button, Tooltip } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../services/ProductService';
import { useCart } from '../contexts/CartContext.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useSnackbar } from '../contexts/SnackbarContext.jsx';

function AddToCart({productId}) {
    const { fetchCart } = useCart();
    const { currentUser } = useAuth();
    const { showSnackbar } = useSnackbar();

    const handleAddProduct = async () => { 
        const userId = currentUser.userId;
        try { 
            await addToCart(userId, productId, 1);
            fetchCart(userId);
            showSnackbar('Product added to cart!', 'success');
            console.log('Product successfully added to cart'); 
            console.log(`CurrentUser: ${userId}`)
 
        } catch (error) {
            console.error('Could not add product to cart')
            console.log(`CurrentUser: ${userId}`)
        }
    }

    return (  
        <Tooltip title='Add this product to your shoppingcart'>
            <Button
            variant='contained'
            color='primary'
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
                <Typography variant='body2' component='span'>
                    Add to cart
                </Typography>
            </Button>
        </Tooltip>
    );
}

export default AddToCart; 