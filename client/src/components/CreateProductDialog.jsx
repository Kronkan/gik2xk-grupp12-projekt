import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { create } from '../services/ProductService';

function CreateProductDialog( { fetchProducts, onProductCreated }) {

    const [openCreate, setOpenCreate] = useState(false);
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        imageURL: ''
    });
        
    
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const openCreateDialog = () => setOpenCreate(true);
    const closeCreateDialog = () => setOpenCreate(false);

    const handleCreateProduct = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newProduct = Object.fromEntries(formData.entries());
        await create(newProduct)
        fetchProducts();
        onProductCreated(); 
        setProduct({
            title: '',
            description: '',
            price: '',
            imageURL: ''
        });
        closeCreateDialog();
    }
  
    return ( 
    <>
        <Tooltip title="Create new product" >
          <IconButton aria-label='create' onClick={openCreateDialog}>
            <CreateNewFolderIcon sx={{ fontSize: '2.5rem'}} />
          </IconButton >
        </Tooltip>
        <Dialog
          open={openCreate}
          onClose={closeCreateDialog}
          fullScreen={fullScreen}
          component = 'form'
          onSubmit={handleCreateProduct}
        >
          <DialogTitle>Add a new product</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill in title, description, price and imageURL & press &quot;Add product&quot; to add a new product. 
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              name="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              name="description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              name="price"
              label="Price"
              type="number"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              name="imageUrl"
              label="Image Url"
              type="url"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeCreateDialog}>Cancel</Button>
            <Button type="submit">Add product</Button>
          </DialogActions>
        </Dialog>
      </> 
    );
    
}

export default CreateProductDialog;