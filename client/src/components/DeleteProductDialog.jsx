import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { remove } from '../services/ProductService';

function DeleteProductDialog({ product, fetchProducts, onDeleted }) {
    
    const [openDelete, setOpenDelete] = useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const openDeleteDialog = () => setOpenDelete(true);
    const closeDeleteDialog = () => setOpenDelete(false);


    const handleDeleteProduct = async () => {
        await remove(product.productId)
        fetchProducts();
        onDeleted();
        closeDeleteDialog();
  }

  return  (
    <>
        <Tooltip title="Delete product" >
            <IconButton aria-label='delete' onClick={openDeleteDialog}>
                <DeleteIcon />
            </IconButton>
        </Tooltip>    
        <Dialog 
            fullScreen={fullScreen}
            open={openDelete}
            onClose={closeDeleteDialog}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {"Delete this product?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this product? This action cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={closeDeleteDialog}>
                    No
                </Button>
                <Button onClick={handleDeleteProduct} autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    </>
  );
}

export default DeleteProductDialog;