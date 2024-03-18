import ProductList from "../components/ProductList";
import { Grid } from "@mui/material";

function Products() {
    return (
        <Grid
            container
            spacing={2}
            justifyContent={'center'}
            sx={{ paddingRight: 2, paddingLeft: 2, marginTop: 2, marginBottom: 2 }} 
        >
            <ProductList />
        </Grid>
    );
}

export default Products;