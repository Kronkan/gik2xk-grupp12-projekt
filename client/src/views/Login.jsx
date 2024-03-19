import { Grid } from "@mui/material";
import LoginForm from "../components/LoginForm";
import EmptyNavBar from "../components/EmptyNavBar";

function Login() { 
    return (
        <>
            <EmptyNavBar />
            <Grid container justifyContent="center" alignItems="center" my={6}>
                <LoginForm />
            </Grid>
        </>
    );
}

export default Login;