import ProductItemSmall from "./ProductItemSmall";

function ProductList() {

const products = [
    {
        "productId": 1,
        "title": "Bapfelsin",
        "description": "Det bästa av 2 världar",
        "price": 35,
        "imageUrl": "https://1.bp.blogspot.com/-AFkplZSbzPw/WVeC-PALYLI/AAAAAAAAAKI/7Sf0eSapgC4hT9ATr6doRimaaOdOWSyuwCLcBGAs/s400/bapelsin.jpg",
        "createdAt": "2024-03-01T14:55:04.000Z",
        "updatedAt": "2024-03-01T14:55:04.000Z"
    },
    {
        "productId": 2,
        "title": "Banananas",
        "description": "Det bästa av 2 andra världar",
        "price": 45,
        "imageUrl": "https://blenderartists.org/uploads/default/optimized/4X/c/f/a/cfa5ad4146dfd7a0a0bbef96c5dd4aab06bf5b4c_2_690x388.jpeg",
        "createdAt": "2024-03-01T14:55:42.000Z",
        "updatedAt": "2024-03-01T14:55:42.000Z"
    },
    {
        "productId": 3,
        "title": "Päpple",
        "description": "Det bästa av 2 andra, andra världar",
        "price": 25,
        "imageUrl": "https://cdn2.cdnme.se/3964973/7-3/pic_5225f93bddf2b360fb138f45.jpg",
        "createdAt": "2024-03-01T14:56:06.000Z",
        "updatedAt": "2024-03-01T14:56:06.000Z"
    }
]



    return ( 
        <ul>
            {products?.length > 0 ? (
                products.map((product) => (
                    <li key={`products_${product.productId}`}>
                        <ProductItemSmall product = {product} />
                    </li>
                ))    
            ) : (
                <h3>Could not fetch product</h3>  
            )}
           
        </ul>
    );
}

export default ProductList;
