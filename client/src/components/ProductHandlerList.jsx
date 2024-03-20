import { FixedSizeList } from 'react-window';
import { Box, ListItem, ListItemText } from '@mui/material';
import { useProduct } from '../contexts/ProductContext';
import DeleteProductDialog from './DeleteProductDialog';
import CreateProductDialog from './CreateProductDialog';
import UpdateProductDialog from './UpdateProductDialog';


function ProductHandlerList() {
  const { products, fetchProducts } = useProduct();

  function renderRow(props) {
      const { index, style } = props;
      const product = products[index];

    return (
      <ListItem style={style} key={product.productId} component='div' disablePadding>
          <ListItemText primary={product.title} sx={{ ml: 2 }} />
          <UpdateProductDialog product={product} fetchProducts={fetchProducts} />
          <DeleteProductDialog product={product} fetchProducts={fetchProducts} />
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
        <CreateProductDialog fetchProducts={fetchProducts} />
      </Box>
    </Box>
  );
}

export default ProductHandlerList;
