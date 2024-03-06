function ProductItemSmall({ product }) {
    return ( 
    <>
        <img src={product.imageUrl} alt={product.title}/>
        <h3>{product.title}</h3>
        <p>Price: {product.price} :-</p> 
    </>
     );
}

export default ProductItemSmall;