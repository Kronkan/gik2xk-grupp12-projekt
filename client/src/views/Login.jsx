import { Grid } from '@mui/material';
import EmptyNavBar from '../components/EmptyNavBar';
import LoginForm from '../components/LoginForm';


function Login() { 
    return (
        <>
            <EmptyNavBar />
            <Grid container justifyContent='center' alignItems='center' my={6}>
                <LoginForm />
            </Grid>
        </>
    );
}

export default Login;