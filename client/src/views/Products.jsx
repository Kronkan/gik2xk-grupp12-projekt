import ProductList from "../components/ProductList";
import { Grid } from "@mui/material";

function Products() {
    return (  
        <>
            <ProductList />
            {/* <Grid container spacing = {2}>
                <Grid item xs = {12} md = {8}>
                    <ProductList />
                </Grid>
            </Grid> */}
        </>
    );
}

export default Products;