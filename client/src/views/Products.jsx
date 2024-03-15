import ProductList from "../components/ProductList";
import { Grid } from "@mui/material";

function Products() {
    return (
        <Grid
            container
            spacing={2}
            sx={{ marginTop: 2, marginBottom: 2 }} 
        >
            <ProductList />
        </Grid>
    );
}

export default Products;