import { FixedSizeList } from 'react-window';
import { Box, ListItem, ListItemText, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useProduct } from '../contexts/ProductContext';


function ProductHandlerList() {
  const { products } = useProduct();

  function renderRow(props) {
      const { index, style } = props;
      const product = products[index];

    return (
      <ListItem style={style} key={product.productId} component="div" disablePadding>
          <ListItemText primary={product.title} sx={{ml: 2}} />
          <Tooltip title="Edit product" >
            <IconButton aria-label='edit'>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete product" >
            <IconButton aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
      </ListItem>
    );
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <Box
        sx={{ 
          height: 400, 
          bgcolor: 'b#f5deb3', 
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
        <Tooltip title="Create new product" >
          <IconButton aria-label='create'>
            <CreateNewFolderIcon />
          </IconButton >
        </Tooltip>
      </Box>
    </Box>
  );
}

export default ProductHandlerList;
