import ProductItemSmall from "./ProductItemSmall";
import { Grid } from '@mui/material';

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
    },
    {
        "productId": 4,
        "title": "DRAKfrukt",
        "description": "Mer legendariskt väsen, än frukt",
        "price": 150,
        "imageUrl": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/42aae299-b168-46f9-8665-21038a52ad24/d9hya67-00be7a55-a521-4c7f-a216-3b9598cfceeb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQyYWFlMjk5LWIxNjgtNDZmOS04NjY1LTIxMDM4YTUyYWQyNFwvZDloeWE2Ny0wMGJlN2E1NS1hNTIxLTRjN2YtYTIxNi0zYjk1OThjZmNlZWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LpBDBQMC1GphHAMdDDWzyqZGBP-e-qtVCc_93bUHrGs",
        "createdAt": "2024-03-01T14:56:06.000Z",
        "updatedAt": "2024-03-01T14:56:06.000Z"
    },
    {
        "productId": 5,
        "title": "Melonkotte",
        "description": "Rund, söt & naggande god!",
        "price": 65,
        "imageUrl": "https://preview.redd.it/fruit-and-animal-hybrids-v0-m89of2su74z91.png?width=640&crop=smart&auto=webp&s=3c78967868940d3d754611b0a9e04a7172f05959",
        "createdAt": "2024-03-01T14:56:06.000Z",
        "updatedAt": "2024-03-01T14:56:06.000Z"
    },
    {
        "productId": 6,
        "title": "Abborenan",
        "description": "Monas favorit!",
        "price": 10,
        "imageUrl": "https://i.pinimg.com/originals/be/fd/7d/befd7d3140aba0742ea2d1cdae4f4244.jpg",
        "createdAt": "2024-03-01T14:56:06.000Z",
        "updatedAt": "2024-03-01T14:56:06.000Z"
    },
    {
        "productId": 7,
        "title": "Owlnanas",
        "description": "The wisest of fruits",
        "price": 160,
        "imageUrl": "https://i0.wp.com/mossandfog.com/wp-content/uploads/2018/04/animal-mashups-jonas-loose-moss-and-fog-5.jpg?fit=1200%2C1196&quality=89&ssl=1",
        "createdAt": "2024-03-01T14:56:06.000Z",
        "updatedAt": "2024-03-01T14:56:06.000Z"
    }
]

    return (
        <Grid
            container
            spacing={2}
            sx={{ marginTop: 2 }} 
        >
        
            {products?.length > 0 ? (
                products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={`products_${product.productId}`}>
                        <ProductItemSmall product = {product} />
                    </Grid>
                ))    
            ) : (
                <h3>Could not fetch product</h3>  
            )}
           
        </Grid>
    );
}

export default ProductList;
