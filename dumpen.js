// async function addToCart(cart_id, product_id, cart_row) {
//     if (!product_id) {
//         return createResponseError(422, 'This product does not exist');
//     }
//     try {
//         cart_row.product_id = id;
//         const newCart_row = await db.cart_row.create(cart_row);
        
//         return createResponseSuccess(newCart_row);
//     } catch (error) {
//         return createResponseError(error.status, error.message);
//     }
// }

// async function addToCart(cart_id, product_id, amount) {
    
//     try {
//         const product = await db.product.findOne({where: {product_id}});
//         if (!product) {
//             return createResponseError(422, 'This product does not exist');
//         }

//         const cart = await db.cart.findOne({where: {cart_id}});
//         if (!cart) {
//             return createResponseError(422, 'This cart does not exist');
//         }

//         const existingCartRow = await db.cart_row.findOne({
//             where: {
//                 cart_id, 
//                 product_id
//         }});

//         if (existingCartRow) {
//             newCartRow = await existingCartRow.update({
//                 amount: existingCartRow.amount + amount });
//         }
//         else {
//             newCartRow = await db.cart_row.create({
//                 cart_id,
//                 product_id,
//                 amount
//             });
//         }

//         const newCartRow = await db.cart_row.create({
//             cart_id,
//             product_id
//         });
//         return createResponseSuccess(newCartRow);

//     } catch (error) {
//         return createResponseError(error.status, error.message);
//     }
// }


//  async function addToCart(cart_id, product_id, cart_row) {
//     if (!product_id) {
//         return createResponseError(422, 'This product does not exist');
//      }     
//      try {
//        // cart_row.product_id = id;
//         //const newCart_row = await db.cart_row.create(cart_row);
//         const product_row_exist = db.cart_row.product_id;
//         if(!product_row_exist) {
//         const newProductRow = await db.product_row.create({cart_id: cart_id, product_id: product_id, amount: 1})
//         return createResponseSuccess(newProductRow);
//         } else {
//           const increment_amount= await product_row_exist.increment("amount", {by: 1}, where: {product_id: "product_id"})   
//         } 
//     } catch (error) {
//         return createResponseError(error.status, error.message);
//     }
    
   
//       /*
//     if (cart_row.product_id) {
//         cart_row.amount += 1;
//     } else {
//         const newProductRow = await db.cart_row.create({cart_id: cart_id, product_id: product_id, amount: 1})
//     }
// }



// THOMAS ADD TO CART FUNKTION:

// async function addToCart(userId, productId, amount) {
    
//     try {
//         const product = await db.product.findOne({
//             where: {
//                 productId: productId
//             }
//         });
//         if (!product) {
//             return createResponseError(422, 'This product does not exist');
//         }

//         let cart = await db.cart.findOne({
//             where: {
//                 userId: userId,
//                 payed: false
//             },
//             order: [['createdAt', 'DESC']]
//         });

//         if (!cart) {
//             cart = await db.cart.create({
//                 userId: userId,
//                 payed: false
//             });
//         }

//         let existingCartRow = await db.cart_row.findOne({
//             where: {
//                 cartId: cart.cartId, 
//                 productId: productId
//         }});

//         if (existingCartRow) {
//             await existingCartRow.increment({
//                 "amount": 1 });
//         } else {
//             await db.cart_row.create({
//                 cartId: cart.cartId,
//                 productId: productId,
//                 amount: 1
//             });
//         }
//         return createResponseSuccess({message: 'Product added to cart successfully'});
//     } catch (error) {
//         return createResponseError(error.status, error.message);
//     }
// }

// SLUT THOMAS ADD TO CART FUNKTION


/*----------------------------------*/

//  productId: product.id,
// title: product.title,
// description: product.productDescription,
// price: product.price,
// imageUrl: product.imageUrl,
// createdAt: product.createdAt,
// updatedAt: product.updatedAt,


// function _formatRating(rating) {
//     const cleanRating = {
//         ratingId: rating.ratingId,
//         user: rating.userId,
//         rating: rating.rating,
//         createdAt: rating.createdAt,
//         updatedAt: rating.updatedAt,
//         user: {
//             userId: rating.user.userId,
//             firstName: rating.user.firstName,
//             lastName: rating.user.lastName,
//             email: rating.user.email
//         }
//     } 

//     if (product.ratings) {
//         cleanRating.ratings = [];
        
//         product.ratings.map((rating) => {
//             return (cleanRating.ratings = [
//                 {
//                     title: rating.title,
//                     user: user.firstName,
//                     createdAt: rating.createdAt
//                 },
//                 ...cleanRating.ratings
//             ]);
//         });
//     }
// };

// async function getAllRatings(productId) {
//     try {
//         const allRatings = await db.rating.findAll({
//             where: {productId: productId},
//             include: db.user});


//             const formattedRatings = allRatings.map((rating) => {
//             return [rating.rating, rating.userId, rating.createdAt]}) 
//         //return createResponseSuccess(_formatRating(allRatings))
//         return createResponseSuccess(formattedRatings)
//     } catch (error) {
//         return createResponseError(error.status, error.message);
//     }
// }


// include: [{
//     model: db.cart_row,
//     include: [{
//         model: db.product  
//     }]
// }]

// async function getCart(userId) {
//     try {
//         const cart = await db.cart.findOne({
//             where: { userId: userId, payed: false },
//             order: [['createdAt', 'DESC']]
//         });

//         if (!cart) {
//             return createResponseError(404, 'This cart does not exist!');
//         }

//         const cartRows = await db.cart_row.findAll({
//             where: { cartId: cart.cartId },
//         });

//         let products = [];
//         let totalPrice = 0;

//         for (const row of cartRows) {
//             const product = await db.product.findByPk(row.productId);
//             const price = row.amount * product.price;
//             totalPrice += price;

//             products.push({
//                 productId: product.productId,
//                 title: product.title,
//                 amount: row.amount,
//                 price: price,
//             });
//         }

//         const formattedCart = {
//             cartId: cart.cartId,
//             products: products,
//             totalPrice: totalPrice
//         };
            
//         return createResponseSuccess(formattedCart);
//     } catch (error) {
//         console.error(error);
//         return createResponseError(error.status, error.message);
//     }
// }

{/* <ul>
        <li>
          <Link to = {'/'}>Home page</Link>
        </li>
        <li>
          <Link to = {'/product/new'}>Handle products</Link>
        </li>
      </ul> */}

      // return ( 
      //   <>
      //       <Link to = {`/products/${product.productId}`}>
      //           <img src={product.imageUrl} alt={product.title}/>
      //           <h3>{product.title}</h3>
      //       </Link>
      //           <p>Price: {product.price} :-</p> 
      //   </>
      //    );

      // const products = [ 
//     {
//         "productId": 1,
//         "title": "Bapfelsin",
//         "description": "Det bästa av 2 världar",
//         "price": 35,
//         "imageUrl": "https://1.bp.blogspot.com/-AFkplZSbzPw/WVeC-PALYLI/AAAAAAAAAKI/7Sf0eSapgC4hT9ATr6doRimaaOdOWSyuwCLcBGAs/s400/bapelsin.jpg",
//         "createdAt": "2024-03-01T14:55:04.000Z",
//         "updatedAt": "2024-03-01T14:55:04.000Z"
//     },
//     {
//         "productId": 2,
//         "title": "Banananas",
//         "description": "Det bästa av 2 andra världar",
//         "price": 45,
//         "imageUrl": "https://blenderartists.org/uploads/default/optimized/4X/c/f/a/cfa5ad4146dfd7a0a0bbef96c5dd4aab06bf5b4c_2_690x388.jpeg",
//         "createdAt": "2024-03-01T14:55:42.000Z",
//         "updatedAt": "2024-03-01T14:55:42.000Z"
//     },
//     {
//         "productId": 3,
//         "title": "Päpple",
//         "description": "Det bästa av 2 andra, andra världar",
//         "price": 25,
//         "imageUrl": "https://cdn2.cdnme.se/3964973/7-3/pic_5225f93bddf2b360fb138f45.jpg",
//         "createdAt": "2024-03-01T14:56:06.000Z",
//         "updatedAt": "2024-03-01T14:56:06.000Z"
//     },
//     {
//         "productId": 4,
//         "title": "DRAKfrukt",
//         "description": "Mer legendariskt väsen, än frukt",
//         "price": 150,
//         "imageUrl": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/42aae299-b168-46f9-8665-21038a52ad24/d9hya67-00be7a55-a521-4c7f-a216-3b9598cfceeb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQyYWFlMjk5LWIxNjgtNDZmOS04NjY1LTIxMDM4YTUyYWQyNFwvZDloeWE2Ny0wMGJlN2E1NS1hNTIxLTRjN2YtYTIxNi0zYjk1OThjZmNlZWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LpBDBQMC1GphHAMdDDWzyqZGBP-e-qtVCc_93bUHrGs",
//         "createdAt": "2024-03-01T14:56:06.000Z",
//         "updatedAt": "2024-03-01T14:56:06.000Z"
//     },
//     {
//         "productId": 5,
//         "title": "Melonkotte",
//         "description": "Rund, söt & naggande god!",
//         "price": 65,
//         "imageUrl": "https://preview.redd.it/fruit-and-animal-hybrids-v0-m89of2su74z91.png?width=640&crop=smart&auto=webp&s=3c78967868940d3d754611b0a9e04a7172f05959",
//         "createdAt": "2024-03-01T14:56:06.000Z",
//         "updatedAt": "2024-03-01T14:56:06.000Z"
//     },
//     {
//         "productId": 6,
//         "title": "Abborenan",
//         "description": "Monas favorit!",
//         "price": 10,
//         "imageUrl": "https://i.pinimg.com/originals/be/fd/7d/befd7d3140aba0742ea2d1cdae4f4244.jpg",
//         "createdAt": "2024-03-01T14:56:06.000Z",
//         "updatedAt": "2024-03-01T14:56:06.000Z"
//     },
//     {
//         "productId": 7,
//         "title": "Owlnanas",
//         "description": "The wisest of fruits",
//         "price": 160,
//         "imageUrl": "https://i0.wp.com/mossandfog.com/wp-content/uploads/2018/04/animal-mashups-jonas-loose-moss-and-fog-5.jpg?fit=1200%2C1196&quality=89&ssl=1",
//         "createdAt": "2024-03-01T14:56:06.000Z",
//         "updatedAt": "2024-03-01T14:56:06.000Z"
//     }
// ];


//     getAll().then((products) => console.log(products));

    // useEffect(() => {
    //     const fetchCart = async () => {
    //         const userId = 1;
    //         const cartData = await getCart(userId);
    //         if (cartData) {
    //           setUserCart(cartData.products);
    //           setTotalPrice(cartData.totalPrice);
    //         } else {
    //           setUserCart([]);
    //           setTotalPrice(0);
    //         }
            
    //     };

    //     fetchCart();
    // }, []);

    // alignItems='center'
    // justifyContent= 'space-between'
    // direction= 'row'

        // return (
    //     <ul>
    //         {ratings.length > 0 ? (
    //             ratings.map((rating) => (
    //                 <li key={`rating_${rating.ratingId}`} style = {style}>
    //                     <UserRating rating={rating} />
    //                 </li>
                
    //             ))
    //         ) : (
    //             <h3>No ratings found for this product.</h3>
    //         )}
    //     </ul>
    // );

    // const imageSize = {
    //     width: 583, 
    //     height: 467
    // };

                    {/* <Box
                    component='img'
                    sx={{
                    // width: {xs: 350, sm: 467, md: 583, lg: 700, xl: 700},
                    // height: {xs: 233, sm: 350, md: 467, lg: 583, xl: 700},
                    minWidth: '60%',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    border: 'solid', 
                    borderColor: '#b3b3b3',
                    borderRadius: '.2rem',
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}
                alt={product.title}
                src={product.imageUrl}
                >
                </Box> */}

                 //     <Box sx={{ 
  //           display: 'flex',
  //           flexDirection: 'column', 
  //           justifyContent: 'center', 
  //           alignItems: 'center', 
  //           textAlign: 'center', 
  //           width: '100%', 
  //           position: 'relative', 
  //           bottom: 0,
  //           left: 0,
  //           right: 0, 
  //           pb: 2,
  //           backgroundColor: '#0060df',
  //           color: 'white',
  //       }}>

  //       <Grid container justifyContent='center' spacing={2} sx={{marginTop: 1}}>
  //         <Grid item>
  //           <Typography variant='caption'>
  //             About Us
  //           </Typography>
  //         </Grid>
  //         <Grid item>
  //           <Typography variant='caption'>
  //             Privacy Policy
  //           </Typography>
  //         </Grid>
  //         <Grid item>
  //           <Typography variant='caption'>
  //             Contact Us
  //           </Typography>
  //         </Grid>
  //       </Grid>

  //     <BottomNavigation sx={{ width: 'auto', backgroundColor: 'transparent', color: 'white' }} value={value} onChange={handleChange}>
  //       <Grid container justifyContent='center' spacing={ matchesSM ? 1 : 2 }>
  //         <Grid item xs={4} sm={2}>
  //           <BottomNavigationAction
  //             label="Facebook"
  //             value="facebook"
  //             icon={<FacebookIcon sx={{color: 'white'}} />}
  //           />
  //         </Grid>
  //         <Grid item xs={4} sm={2}>
  //           <BottomNavigationAction
  //             label="Instagram"
  //             value="instagram"
  //             icon={<InstagramIcon sx={{color: 'white'}} />}
  //           />
  //         </Grid>
  //         <Grid item xs={4} sm={2}>
  //           <BottomNavigationAction
  //             label="X"
  //             value="X"
  //             icon={<XIcon sx={{color: 'white'}} />}
  //           />
  //         </Grid>
  //         <Grid item xs={4} sm={2}>
  //           <BottomNavigationAction
  //             label="Github"
  //             value="github"
  //             icon={<GitHubIcon sx={{color: 'white'}} />}
  //           />
  //         </Grid>
  //         <Grid item xs={4} sm={2}>
  //           <BottomNavigationAction
  //             label="Youtube"
  //             value="youtube"
  //             icon={<YouTubeIcon sx={{color: 'white'}} />}
  //           />
  //         </Grid>
  //         <Grid item xs={4} sm={2}>
  //           <BottomNavigationAction 
  //             label="LinkedIn" 
  //             value="linkedin" 
  //             icon={<LinkedInIcon sx={{color: 'white'}} />} 
  //           />
  //         </Grid>
  //       </Grid>
  //     </BottomNavigation>

  //     <Typography variant='caption' display='block' gutterBottom sx={{ mt: 2 }}>
  //       © {new Date().getFullYear()} by Team MonaFilipThomas
  //     </Typography>
  //   </Box>
  // );

  // import { Box, AppBar, Toolbar } from '@mui/material';
// import HomeLogo from './HomeLogo';
// import Menu from './Menu';
// import CartLogo from './CartLogo';
// import SearchBar from './SearchBar';
// import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import SearchIcon from '@mui/icons-material/Search';

  

// function NavBar() {

//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


//     return ( 
//         <Box sx={{ flexGrow: 1}}>
//             <AppBar position="static">
//                 <Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>

//                     <Box sx={{ display: 'flex', alignItems: 'center'}}>
//                         <HomeLogo />
//                         <Menu />
//                     </Box>
                    
//                     {/* Centrera SearchBar med absolut positionering */}
//                     <Box sx={{
//                         position: isSmallScreen ? 'relative' : 'absolute',
//                         left: isSmallScreen ? 'auto' : '50%',
//                         transform: isSmallScreen ? 'none' : 'translateX(-50%)',
//                         zIndex: 1}}>
//                         <SearchBar sx= {{ width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }}}/>
//                     </Box>
                    
//                     <Box sx={{ display: 'flex', alignItems: 'center' }}> 
//                         <CartLogo /> 
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// }

// export default NavBar;

// }