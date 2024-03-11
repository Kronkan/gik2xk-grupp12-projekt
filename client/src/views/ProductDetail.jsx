import { useParams } from "react-router-dom";
import RatingList from "../components/RatingList";
import { Grid } from "@mui/material";

function ProductDetail() {

    const { productId } = useParams()

    return (
        <>
            <Grid container spacing = {2}>
                <Grid item xs = {12} md = {4}>
                    <RatingList productId={productId}/>
                </Grid>
            </Grid>
        </>
        
    );
}

export default ProductDetail;