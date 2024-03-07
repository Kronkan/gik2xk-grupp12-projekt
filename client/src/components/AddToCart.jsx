import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function AddToCart() {
    return ( 
        <>
            <IconButton  color = 'inherit'>   
                <AddShoppingCartIcon />
            </IconButton>
        </>

    );
}

export default AddToCart;