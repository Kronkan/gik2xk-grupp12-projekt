import * as React from 'react';
import { Box, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';


function CartLogo()  {
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
            {/* Här ska varorna i varukorgen visas istället */}
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    return (
      <div>
        <IconButton onClick={toggleDrawer(true)} color = 'inherit'>
            <ShoppingCartIcon/>
        </IconButton>
        {/* Ange anchor="right" för att öppna drawern från höger sida */}
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    );
}

export default CartLogo; 

// function CartLogo() {
//   const [open, setOpen] = React.useState(false);
//   const [items, setItems] = React.useState([
//       { id: 1, name: 'Produkt 1', quantity: 1 },
//       { id: 2, name: 'Produkt 2', quantity: 2 },
//   ]);

//   const toggleDrawer = (newOpen) => () => {
//       setOpen(newOpen);
//   };

//   const handleAddQuantity = (id) => {
//       const newItems = items.map((item) => {
//           if (item.id === id) {
//               return { ...item, quantity: item.quantity + 1 };
//           }
//           return item;
//       });
//       setItems(newItems);
//   };

//   const handleSubtractQuantity = (id) => {
//       const newItems = items.map((item) => {
//           if (item.id === id && item.quantity > 0) {
//               return { ...item, quantity: item.quantity - 1 };
//           }
//           return item;
//       });
//       setItems(newItems);
//   };

//   const DrawerList = (
//       <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//           <List>
//               {items.map((item, index) => (
//                   <React.Fragment key={item.id}>
//                       <ListItem>
//                           <Typography sx={{ flex: '1 1 auto' }}>{item.name}</Typography>
//                           <IconButton onClick={() => handleSubtractQuantity(item.id)} color="inherit">
//                               <RemoveCircleOutlineIcon />
//                           </IconButton>
//                           <Typography>{item.quantity}</Typography>
//                           <IconButton onClick={() => handleAddQuantity(item.id)} color="inherit">
//                               <AddCircleOutlineIcon />
//                           </IconButton>
//                       </ListItem>
//                       {index < items.length - 1 && <Divider />}
//                   </React.Fragment>
//               ))}
//           </List>
//       </Box>
//   );

//   return (
//       <div>
//           <IconButton onClick={toggleDrawer(true)} color="inherit">
//               <ShoppingCartIcon />
//           </IconButton>
//           <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
//               {DrawerList}
//           </Drawer>
//       </div>
//   );
// }

// export default CartLogo;