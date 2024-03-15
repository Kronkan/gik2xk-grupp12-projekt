import { useState, useEffect } from 'react';
import { FixedSizeList } from 'react-window';
import { Box, ListItem, ListItemText, IconButton, Tooltip } from '@mui/material';
import { getAll } from "../services/UserService"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

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
        <Tooltip title='Edit user'>
          <IconButton aria-label='edit'>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete user">
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
          overflow: 'auto' 
        }}
      >
        <FixedSizeList
          height={400}
          width={360}
          itemSize={46}
          itemCount={users.length}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
        <Tooltip title="Create new user">
          <IconButton>
            <CreateNewFolderIcon>
            </CreateNewFolderIcon>
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default UserHandlerList;

