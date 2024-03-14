import { useState } from 'react';
import { Box, Drawer, Button, List, Typography, IconButton } from '@mui/material';
import RatingList from './RatingList';
import CloseIcon from '@mui/icons-material/Close';



function ShowProductRating({ productId }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{display:'flex', justifyContent: 'flex-end'}}>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <RatingList productId={productId} />
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* <Button onClick={toggleDrawer(true)}>Show all ratings </Button> */}
      <Button onClick={toggleDrawer(true)}
        sx={{
          color: 'primary.main',
          backgroundColor: 'transparent',
          textTransform: 'none',
          p: 0,
          m: 0,
          '&:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'underline',
          },
        }}>
        <Typography variant="body2" component="span">
          Show all ratings
        </Typography>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>

  );
}

export default ShowProductRating;