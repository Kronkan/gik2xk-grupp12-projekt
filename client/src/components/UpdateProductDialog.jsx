import { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { update } from '../services/ProductService';
import EditIcon from '@mui/icons-material/Edit';
import { useSnackbar } from '../contexts/SnackbarContext';

function UpdateProductDialog( { product, fetchProducts }) {
    const [openUpdate, setOpenUpdate] = useState(false);
    const [originalProduct, setOriginalProduct] = useState({});
    const [updatedProduct, setUpdatedProduct]  = useState({
      title: '',
      description: '',
      price: '',
      imageUrl: ''
    });

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { showSnackbar } = useSnackbar();

    const openUpdateDialog = () => setOpenUpdate(true);
    const closeUpdateDialog = () => setOpenUpdate(false);

    useEffect(() => {
        if (product) {
            setOriginalProduct(product);
            setUpdatedProduct({
                title: product.title,
                description: product.description,
                price: product.price,
                imageUrl: product.imageUrl
            });
            
        }
    }, [product])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct((prev) => ({
            ...prev, 
            [name]: value
        }));
    };


    const handleUpdateProduct = async (event) => {
        event.preventDefault();
        const changes = Object.keys(updatedProduct).reduce((acc, key) => {
            if (updatedProduct[key] !== originalProduct[key] && updatedProduct[key] !== '') {
                acc[key] = updatedProduct[key];
            }
            return acc;
        }, {});

        if (Object.keys(changes).length > 0) {
            await update({ ...changes, productId: product.productId });
            console.log(changes)
            fetchProducts();
            showSnackbar('The product was successfully updated!', 'success');
            closeUpdateDialog();
        }      
    }
        
  
    return ( 
    <>
        <Tooltip title='Update product' >
          <IconButton aria-label='update' onClick={openUpdateDialog}>
            <EditIcon />
          </IconButton >
        </Tooltip>
        <Dialog
          open={openUpdate}
          onClose={closeUpdateDialog}
          fullScreen={fullScreen}
          component = 'form'
          onSubmit={handleUpdateProduct}
        >
          <DialogTitle>Update product</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill in title, description, price or imageURL & press &quot;Update product&quot;, to update a product. 
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              name='title'
              label='Title'
              type='text'
              fullWidth
              variant='standard'
              value={updatedProduct.title}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin='dense'
              name='description'
              label='Description'
              type='text'
              fullWidth
              variant='standard'
              value={updatedProduct.description}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin='dense'
              name='price'
              label='Price'
              type='number'
              fullWidth
              variant='standard'
              value={updatedProduct.price}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin='dense'
              name='imageUrl'
              label='Image Url'
              type='url'
              fullWidth
              variant='standard'
              value={updatedProduct.imageUrl}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeUpdateDialog}>Cancel</Button>
            <Button type='submit'>Update product</Button>
          </DialogActions>
        </Dialog>
      </> 
    );
    
}

export default UpdateProductDialog;