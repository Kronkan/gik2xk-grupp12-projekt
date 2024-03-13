import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingList from "../components/RatingList";
import { Grid } from "@mui/material";
import ProductItemLarge from "../components/ProductItemLarge";
import { getById } from "../services/ProductService";

function ProductDetail() {

    const { productId } = useParams()
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await getById(productId);
            setProduct(productData);
        };

        fetchProduct();
    }, [productId]);

    return (
        <>
            {product && <ProductItemLarge product={product}/>}
        </>
        
    );
}

export default ProductDetail;