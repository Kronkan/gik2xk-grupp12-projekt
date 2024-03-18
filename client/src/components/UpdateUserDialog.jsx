import { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { update } from '../services/UserService';
import EditIcon from '@mui/icons-material/Edit';

function UpdateUserDialog( { user, fetchUsers, onUserUpdated }) {
    const [openUpdate, setOpenUpdate] = useState(false);
    const [originalUser, setOriginalUser] = useState({});
    const [updatedUser, setUpdatedUser]  = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });

    useEffect(() => {
        if (user) {
            setOriginalUser(user);
            setUpdatedUser({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password
            });
            
        }
    }, [user])


    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const openUpdateDialog = () => setOpenUpdate(true);
    const closeUpdateDialog = () => setOpenUpdate(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prev) => ({
            ...prev, 
            [name]: value
        }));
    };


    const handleUpdateUser = async (event) => {
        event.preventDefault();
        const changes = Object.keys(updatedUser).reduce((acc, key) => {
            if (updatedUser[key] !== originalUser[key] && updatedUser[key] !== '') {
                acc[key] = updatedUser[key];
            }
            return acc;
        }, {});

        if (Object.keys(changes).length > 0) {
            await update({ ...changes, userId: user.userId });
            console.log(changes)
            fetchUsers();
            onUserUpdated();
            closeUpdateDialog();
        }      
    }
        
  
    return ( 
    <>
        <Tooltip title='Update user' >
          <IconButton aria-label='update' onClick={openUpdateDialog}>
            <EditIcon />
          </IconButton >
        </Tooltip>
        <Dialog
          open={openUpdate}
          onClose={closeUpdateDialog}
          fullScreen={fullScreen}
          component = 'form'
          onSubmit={handleUpdateUser}
        >
          <DialogTitle>Update user</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill in firstname, lastname, email or password & press &quot;Update user&quot;, to update user. 
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              name='firstName'
              label='Firstname'
              type='text'
              fullWidth
              variant='standard'
              value={updatedUser.firstName}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin='dense'
              name='lastName'
              label='Lastname'
              type='text'
              fullWidth
              variant='standard'
              value={updatedUser.lastName}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin='dense'
              name='email'
              label='Email'
              type='email'
              fullWidth
              variant='standard'
              value={updatedUser.email}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin='dense'
              name='password'
              label='Password'
              type='password'
              fullWidth
              variant='standard'
              value={updatedUser.password}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeUpdateDialog}>Cancel</Button>
            <Button type='submit'>Update User</Button>
          </DialogActions>
        </Dialog>
      </> 
    );
    
}

export default UpdateUserDialog;