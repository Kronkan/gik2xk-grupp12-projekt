import ProductList from "../components/ProductList";
import UserList from "../components/UserList";
import RatingList from "../components/RatingList";
import { Grid } from "@mui/material";

function ProductHandler() {
    return ( 
        <>
            <Grid container spacing = {2}>
                <Grid item xs = {12} md = {8}>
                    <ProductList />
                </Grid>
                <Grid item xs = {12} md = {4}>
                    <UserList />
                </Grid>
                <Grid item xs = {12} md = {4}>
                    <RatingList />
                </Grid>
            </Grid>
        </>
     );
}

export default ProductHandler;