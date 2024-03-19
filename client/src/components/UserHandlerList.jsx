import { useState, useEffect } from 'react';
import { FixedSizeList } from 'react-window';
import { Box, ListItem, ListItemText } from '@mui/material';
import { getAll } from "../services/UserService";
import DeleteUserDialog from './DeleteUserDialog';
import CreateUserDialog from './CreateUserDialog';
import UpdateUserDialog from './UpdateUserDialog';


function UserHandlerList() { 
  const [users, setUsers] = useState([]);

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
        <UpdateUserDialog user={user} fetchUsers={fetchUsers} />
        <DeleteUserDialog user={user} fetchUsers={fetchUsers} />
      </ListItem>
    );
  }
  
  return (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <Box
        sx={{ 
          height: 400, 
          bgcolor: '#f0ead6', 
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
        <CreateUserDialog fetchUsers={fetchUsers} />
      </Box>
    </Box>
  );
}

export default UserHandlerList;

