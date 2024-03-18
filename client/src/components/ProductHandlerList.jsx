import { useState } from 'react';
import { FixedSizeList } from 'react-window';
import { Box, ListItem, ListItemText, Snackbar, Alert } from '@mui/material';
import { useProduct } from '../contexts/ProductContext';
import DeleteProductDialog from './DeleteProductDialog';
import CreateProductDialog from './CreateProductDialog';
import UpdateProductDialog from './UpdateProductDialog';


function ProductHandlerList() {
  const { products, fetchProducts } = useProduct();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info',
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const onProductDeleted = () => {
    setSnackbar({
      open: true,
      message: 'The product was successfully deleted!',
      severity: 'success',
    });
  };

  const onProductCreated = () => {
    setSnackbar({
      open: true,
      message: 'The product was successfully created!',
      severity: 'success',
    });
  };

  const onProductUpdated = () => {
    setSnackbar({
      open: true,
      message: 'The product was successfully updated!',
      severity: 'success',
    });
  };

  function renderRow(props) {
      const { index, style } = props;
      const product = products[index];

    return (
      <ListItem style={style} key={product.productId} component="div" disablePadding>
          <ListItemText primary={product.title} sx={{ ml: 2 }} />
          <UpdateProductDialog product={product} fetchProducts={fetchProducts} onProductUpdated={onProductUpdated} />
          <DeleteProductDialog product={product} fetchProducts={fetchProducts} onProductDeleted={onProductDeleted} />
      </ListItem>
      
    );
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <Box
        sx={{ 
          height: 400, 
          backgroundColor: '#f0ead6', 
          boxShadow: 'inset 0 0 .5rem #000', 
          borderRadius: 2,
          overflow: 'auto',
        }}
      >
        <FixedSizeList
          height={400}
          width='100%'
          itemSize={46}
          itemCount={products.length}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
        <CreateProductDialog fetchProducts={fetchProducts} onCreated={onProductCreated} />
      </Box>
      <Snackbar open={snackbar.open} autoHideDuration={2000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant='filled' sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
</Box>
  );
}

export default ProductHandlerList;
