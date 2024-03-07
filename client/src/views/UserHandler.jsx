import UserList from "../components/UserList";
import { Grid } from "@mui/material";

function UserHandler() {
    return ( 
        <>
            <Grid container spacing = {2}>
                <Grid item xs = {12} md = {4}>
                    <UserList />
                </Grid>
            </Grid>
        </>
    ); 
}

export default UserHandler;