import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { create } from '../services/UserService';
import { useSnackbar } from '../contexts/SnackbarContext';

function CreateUserDialog( { fetchUsers }) {

    const [openCreate, setOpenCreate] = useState(false);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
        
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { showSnackbar } = useSnackbar();

    const openCreateDialog = () => setOpenCreate(true);
    const closeCreateDialog = () => setOpenCreate(false);

    const handleCreateUser = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newUser = Object.fromEntries(formData.entries());
        await create(newUser)
        fetchUsers();
        showSnackbar('The user was successfully created!', 'success');
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });  
        closeCreateDialog();
    } 
   
    return ( 
    <>
        <Tooltip title='Create new user'>
          <IconButton aria-label='create' onClick={openCreateDialog}>
            <PersonAddIcon sx={{ fontSize: '2.5rem'}} />
          </IconButton >
        </Tooltip>
        <Dialog
          open={openCreate}
          onClose={closeCreateDialog}
          fullScreen={fullScreen}
          component = 'form'
          onSubmit={handleCreateUser}
        >
          <DialogTitle>Add a new user</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill in firstname, lastname, email and password & press &quot;Create user&quot; to add a new user. 
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin='dense'
              name='firstName'
              label='Firstname'
              type='text'
              fullWidth
              variant='standard'
            />
            <TextField
              autoFocus              
              required
              margin='dense'
              name='lastName'
              label='Lastname'
              type='text'
              fullWidth
              variant='standard'
            />
            <TextField
              autoFocu
              required
              margin='dense'
              name='email'
              label='Email'
              type='email'
              fullWidth
              variant='standard'
            />
            <TextField
              autoFocus              
              required
              margin='dense'
              name='password'
              label='Password'
              type='password'
              fullWidth
              variant='standard'
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeCreateDialog}>Cancel</Button>
            <Button type='submit'>Create user</Button>
          </DialogActions>
        </Dialog>
      </> 
    );
    
}

export default CreateUserDialog;