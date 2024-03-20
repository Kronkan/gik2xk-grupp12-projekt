import { Link } from 'react-router-dom';
import { IconButton, Grow, Paper, Popper, MenuItem, MenuList, Stack, Typography, ClickAwayListener, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';


function Menu() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  
    return (
      <Stack direction='row' spacing={2}>
        <div>
          <Tooltip title='Open menu'>
            <IconButton
              ref={anchorRef}
              id='composition-button'
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup='true'
              sx={{ ml: 2 }}
              onClick={handleToggle}
              >
                  <MenuIcon />
                  <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                      Menu
                  </Typography>
            </IconButton>
          </Tooltip>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement='bottom-start'
            transition
            disablePortal
            style = {{zIndex: 25}}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id='composition-menu'
                      aria-labelledby='composition-button'
                      onKeyDown={handleListKeyDown}
                    >
                      <Link to = {'/home'}>
                        <MenuItem onClick={handleClose}>Home</MenuItem>
                      </Link>
                      <Link to = {'/products'}>
                        <MenuItem onClick={handleClose}>Products</MenuItem>
                      </Link>
                      <Link to = {'/admin'}>
                        <MenuItem onClick={handleClose}>Admin</MenuItem>
                      </Link>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    );
}

export default Menu;

