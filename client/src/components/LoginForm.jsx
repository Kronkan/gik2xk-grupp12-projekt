import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Paper, Tooltip} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock'; 
import { useAuth } from '../contexts/AuthContext';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            navigate('/home');
        }
        catch (error) {
            console.error('Login failed', error);
        } 
    };
    
    return ( 
        <Paper elevation={3} sx={{ 
            backgroundColor: "#c2b280",
            borderRadius: '1rem',
            color: 'white'}}>
            <Box 
                display='flex'
                flexDirection='column'
                alignItems='center'
                textAlign='center'
                justifyContent="center"
                minHeight='55vh'
                maxWidth='55vh'
                sx={{ m: 1 }}
                
            >
                <LockIcon sx={{ 
                    fontSize: '2rem' , 
                    mb: 2.5,
                    p: 1.5, 
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    borderRadius: '50%',
                    backdropFilter: 'blur(1rem)',
                    }} 
                />
                <Typography variant='h6' component='h1' marginBottom={3}>
                    Sign in with your email & password to proceed
                </Typography> 
                <Box component='form' onSubmit={handleLogin} noValidate>
                    <TextField 
                        label='Email' 
                        placeholder='Enter email'
                        type='email' 
                        fullWidth 
                        required
                        sx={{
                            mb: 2, 
                            backgroundColor: '#f0ead6', 
                            boxShadow: 'inset 0 0 .5rem Gray',
                            borderRadius: 2 
                        }}
                    />
                    <TextField 
                        label='Password' 
                        placeholder='Enter password' 
                        type='password' 
                        fullWidth 
                        required
                        sx={{
                            mb: 2, 
                            backgroundColor: '#f0ead6', 
                            boxShadow: 'inset 0 0 .5rem Gray',
                            borderRadius: 2 
                        }}
                    />
                    <Tooltip title = 'Click to login'>
                        <Button type='submit'
                            sx={{
                                color:'white',
                                bgcolor: '#a69f72', 
                                fontWeight: 'bold', 
                                padding: '.5rem 1rem', 
                                '&:hover': {
                                    bgcolor: '#8b7e4a',
                                },
                                boxShadow: 3
                            }}
                        > Login
                        </Button>
                    </Tooltip>
                </Box>
            </Box>
        </Paper>
    );
}

export default LoginForm;


{/* Komponenter som har userId hårdkodat:
 - AddRating, 
 - AddToCart,
 - CartLogo,
 - CartContext */}
