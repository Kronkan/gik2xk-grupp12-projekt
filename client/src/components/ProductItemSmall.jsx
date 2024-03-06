import { Link } from 'react-router-dom';


function ProductItemSmall({ product }) {
    return ( 
    <>
        <Link to = {`/products/${product.productId}`}>
            <img src={product.imageUrl} alt={product.title}/>
            <h3>{product.title}</h3>
        </Link>
            <p>Price: {product.price} :-</p> 
    </>
     );
}

export default ProductItemSmall;