import { useState, useEffect } from 'react';
import { FixedSizeList } from 'react-window';
import { Box, ListItem, ListItemText, Snackbar, Alert } from '@mui/material';
import { getAll } from "../services/UserService";
import DeleteUserDialog from './DeleteUserDialog';
import CreateUserDialog from './CreateUserDialog';
import UpdateUserDialog from './UpdateUserDialog';


function UserHandlerList() { 
  const [users, setUsers] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info',
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const onUserDeleted = () => {
    setSnackbar({
      open: true,
      message: 'The user was successfully deleted!',
      severity: 'success',
    });
  };

  const onUserCreated = () => {
    setSnackbar({
      open: true,
      message: 'The user was successfully created!',
      severity: 'success',
    });
  };

  const onUserUpdated = () => {
    setSnackbar({
      open: true,
      message: 'The user was successfully updated!',
      severity: 'success',
    });
  };

  useEffect(() => {
      fetchUsers();
  }, []);

  const fetchUsers = async () => {
      const userData = await getAll();
      setUsers(userData);
  }

  function renderRow(props) {
    const { index, style } = props;
    const user = users[index]

    return (
      <ListItem style={style} key={user.userId} component="div" disablePadding>
        <ListItemText primary={`${user.firstName} ${user.lastName}`} sx={{ml: 2}}/>
        <UpdateUserDialog user={user} fetchUsers={fetchUsers} onUserUpdated={onUserUpdated} />
        <DeleteUserDialog user={user} fetchUsers={fetchUsers} onUserDeleted={onUserDeleted} />
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
          overflow: 'auto' 
        }}
      >
        <FixedSizeList
          height={400}
          width='100%'
          itemSize={46}
          itemCount={users.length}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
        <CreateUserDialog fetchUsers={fetchUsers} onUserCreated={onUserCreated} />
      </Box>
      <Snackbar open={snackbar.open} autoHideDuration={2000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant='filled' sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default UserHandlerList;

