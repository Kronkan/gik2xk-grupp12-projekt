import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { remove } from '../services/ProductService';
import { useSnackbar } from '../contexts/SnackbarContext';

function DeleteProductDialog({ product, fetchProducts }) {
    const [openDelete, setOpenDelete] = useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { showSnackbar } = useSnackbar();

    const openDeleteDialog = () => setOpenDelete(true);
    const closeDeleteDialog = () => setOpenDelete(false);


    const handleDeleteProduct = async () => {
        await remove(product.productId)
        fetchProducts();
        showSnackbar('The product was successfully deleted!', 'success');
        closeDeleteDialog();
  }

  return  (
    <>
        <Tooltip title='Delete product' >
            <IconButton aria-label='delete' onClick={openDeleteDialog}>
                <DeleteIcon />
            </IconButton>
        </Tooltip>    
        <Dialog 
            fullScreen={fullScreen}
            open={openDelete}
            onClose={closeDeleteDialog}
            aria-labelledby='responsive-dialog-title'
        >
            <DialogTitle id='responsive-dialog-title'>
                {'Delete this product?'}
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