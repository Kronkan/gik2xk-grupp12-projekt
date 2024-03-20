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

    // return (
    //     <ul>
    //         {users?.length > 0 ? (
    //             users.map((user) => (
    //                 <li key = {`users_${user.userId}`}>
    //                     <User user={user} />
    //                 </li>
    //             ))
    //         ) : ( 
    //             <h3>No users found</h3> 
    //         )}
    //     </ul>
    // );

    // const users =
    // [
    //     {
    //         "userId": 1,
    //         "firstName": "Tomatförsäljaren",
    //         "lastName": "Stabforsmo Norell",
    //         "email": "thsta@du.se",
    //         "password": "Bajshög3456",
    //         "createdAt": "2024-03-01T14:54:03.000Z",
    //         "updatedAt": "2024-03-01T14:54:03.000Z"
    //     },
    //     {
    //         "userId": 2,
    //         "firstName": "Dillförsäljaren",
    //         "lastName": "Fille Lindgren Dewari",
    //         "email": "filil@du.se",
    //         "password": "dillsås3456",
    //         "createdAt": "2024-03-01T14:54:42.000Z",
    //         "updatedAt": "2024-03-01T14:54:42.000Z"
    //     },
    //     {
    //         "userId": 3,
    //         "firstName": "CrazyCatLady",
    //         "lastName": "Tlili",
    //         "email": "motli@du.se",
    //         "password": "Shiela<3VixieYAY",
    //         "createdAt": "2024-03-06T08:21:23.000Z",
    //         "updatedAt": "2024-03-06T08:21:23.000Z"
    //     }
    // ]

  //   {
  //     "productId": 30,
  //     "title": "Meat & rice",
  //     "description": "Gött som Faaaan däh!",
  //     "price": 85,
  //     "imageUrl": "https://images.pexels.com/photos/19802119/pexels-photo-19802119/free-photo-of-a-bowl-of-rice-and-meat-with-a-fork.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     "createdAt": "2024-03-14T15:27:29.000Z",
  //     "updatedAt": "2024-03-14T15:27:29.000Z"
  // }

{/* <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
  <DialogTitle id="alert-dialog-title">{"Delete this product?"}</DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">Are you sure you want to delete {selectedProduct?.title}?</DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>No</Button>
    <Button onClick={handleDeleteProduct} autoFocus>Yes</Button>
  </DialogActions>
</Dialog> */}

  // const [openSnackbar, setOpenSnackbar] = useState(false);
  // const handleCloseSnackbar = () => {
  //   setOpenSnackbar(false);
  // };

        {/* <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
          <Alert onClose={handleCloseSnackbar} severity='success' variant='filled' sx={{ width: '100%' }}>
              The product was successfully deleted!
          </Alert>
      </Snackbar> */}

        //   PaperProps={{
        //     component: 'form',
        //     onSubmit: (event) => {
        //       event.preventDefault();
        //       const formData = new FormData(event.currentTarget);
        //       const formJson = Object.fromEntries(formData.entries());
        //       const title = formJson.title;
        //       const description = formJson.description;
        //       const price = formJson.price;
        //       const imageUrl = formJson.imageUrl;
        //       console.log(title, description, price, imageUrl);
        //       handleClose();
        //     },
        //   }}

        // async function addRating(userId, productId, rating) {
//     try {
//         const product = await db.product.findOne({
//             where: {
//                 productId: productId
//             }
//         }); 
//         if (!product) {
//             return createResponseError(422, 'This product does not exist!');
//         }
//         const newRating = await db.rating.create({
//             rating: rating,
//             userId: userId,
//             productId: productId
//         });
//         return createResponseSuccess(`You rated this product with: ${newRating.rating} hearts, thank you!`);
//         // return createResponseSuccess(newRating);  

//     } catch (error) {
//         return createResponseError(error.status, error.message);
//     }
// }

    // const handleUpdateProduct = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     const updatedProduct = Object.fromEntries(formData.entries());
    //     updatedProduct.productId = product.productId;
    //     await update(updatedProduct)
    //     fetchProducts();
    //     onProductUpdated(); 
    //     closeUpdateDialog();
    // }

    
// function ProductItemLarge({ product }) {

//     const theme = useTheme();
//     const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
//     const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

//     return (
//         <Box sx={{ marginTop: 4, marginBottom: 4 }}>
//             <Grid container justifyContent="center" alignItems="start" spacing={2}>
//                 <Grid item xs={12} sm={matchesXS ? 12 : 6} md={5}>
//                     <Box
//                         sx={{
//                             width: '100%',
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             overflow: 'hidden',
//                             border: '1px solid #b3b3b3',
//                             borderRadius: theme.shape.borderRadius,
//                             boxShadow: theme.shadows[3],
//                             mb: 2,
//                         }}
//                     >
//                         <img
//                             src={product.imageUrl}
//                             alt={product.title}
//                             style={{
//                                 width: '100%',
//                                 height: 'auto',
//                                 objectFit: 'cover',
//                                 objectPosition: 'center'
//                             }}
//                         />
//                     </Box>
//                     <MeanRating productId={product.productId} />
//                     <ShowProductRatings productId={product.productId} />
//                 </Grid>

//                 {matchesMD && !matchesXS && (
//                     <Divider orientation="vertical" flexItem sx={{ height: 'auto', mx: 2 }} />
//                 )}

//                 <Grid item xs={12} sm={matchesXS ? 12 : 6} md={6} sx={{ pl: matchesMD ? 2 : 0, pt: matchesXS ? 2 : 0 }}>
//                     <Typography gutterBottom variant='h4'>{product.title}</Typography>
//                     <Divider sx={{ my: 1 }} />
//                     <Typography gutterBottom variant='body1' sx={{ whiteSpace: 'pre-wrap' }}>
//                         {product.description.split('\\n').join('\n')}
//                     </Typography>
//                     <Divider sx={{ my: 1 }} />
//                     <Typography gutterBottom variant='h6'>Price: {product.price} :-</Typography>
//                     <Divider sx={{ my: 1 }} />
//                     <AddRating productId={product.productId} />
//                     <Divider sx={{ my: 1 }} />
//                     <AddToCart productId={product.productId} />
//                 </Grid>
//             </Grid>
//         </Box>
//     );

    //     <Grid container justifyContent='center' alignItems="flex-start" spacing={4} sx={{ marginTop: 4, marginBottom: 4 }}>
    //         <Grid item xs={12} sm={6} md={4} lg={3}>
    //             <Box
    //                 sx={{
    //                     width: '100%',
    //                     overflow: 'hidden',
    //                     border: 'solid',
    //                     borderColor: '#b3b3b3',
    //                     borderRadius: theme.shape.borderRadius,
    //                     boxShadow: theme.shadows[3],
    //                 }}>
    //                 <img
    //                     src={product.imageUrl}
    //                     alt={product.title}
    //                     style={{
    //                         width: '100%',
    //                         height: 'auto',
    //                         objectFit: 'cover',
    //                         objectPosition: 'center'
    //                     }}
    //                 />
    //             </Box>
    //             <Divider sx={{my: 1}} />
    //             <MeanRating productId={product.productId} />
    //             <ShowProductRatings productId={product.productId} />
    //         </Grid>
            
    //         <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
    //             <Divider orientation="vertical" flexItem sx={{ height: 'auto' }} />
    //         </Grid>
            
    //         <Grid item xs={12} sm={7} md={8} lg={9}>
    //             <Typography gutterBottom variant='h4'>
    //                 {product.title}
    //             </Typography>
    //             <Divider sx={{my: 1}} />
    //             <Typography gutterBottom variant='body1' sx={{ whiteSpace: 'pre-wrap' }}>
    //                 {product.description.split('\\n').join('\n')} 
    //             </Typography>
    //             <Divider sx={{my: 1}}/>
    //             <Typography gutterBottom variant='h6'>
    //                 Price: {product.price} :-
    //             </Typography>
    //             <Divider sx={{my: 1}}/>
    //             <AddRating productId={product.productId} rating={2} />
    //             <Divider sx={{my: 1}}/>
    //             <AddToCart productId={product.productId} />
    //         </Grid>
    //     </Grid>
//     // );
// }


// export default ProductItemLarge;

{/* <Button onClick={toggleDrawer(true)}>Show all ratings </Button> */}

// function NavBar() {
//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static" sx={{backgroundColor: '#c2b280'}}>
//                 <Toolbar disableGutters sx={{
//                     flexDirection: isSmallScreen ? 'column' : 'row',
//                     alignItems: 'center',
//                     justifyContent: 'space-between'
//                 }}>
//                     <Grid container spacing={2} alignItems="center" justifyContent="space-between">
//                         <Grid item xs={12} sm="auto">
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                                 <HomeLogo />
//                                 <Menu />
//                             </Box>
//                         </Grid>

//                         <Grid item xs={12} sm="auto" sx={{ flexGrow: 1, my: isSmallScreen ? 1 : 0 }}>
//                             <SearchBar />
//                         </Grid>

//                         <Grid item xs={12} sm="auto">
//                             <CartLogo />
//                         </Grid>
//                     </Grid>
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// }

  // const { currentUser } = useAuth(); 

  // if (!currentUser) { 

  //   return ( 

  //   <AuthProvider>
  //     <ProductProvider>
  //       <CartProvider>
  //         <Box display="flex" flexDirection="column" minHeight="100vh">
  //           <Box component="main" flexGrow={1}>
  //             <Outlet />
  //           </Box>
  //           <Footer />
  //         </Box>
  //       </CartProvider>
  //     </ProductProvider>
  //   </AuthProvider>

  //   )


  // } else {

  // return (
  //   <AuthProvider>
  //     <ProductProvider>
  //       <CartProvider>
  //         <Box display="flex" flexDirection="column" minHeight="100vh">
  //           <NavBar />
  //           <Box component="main" flexGrow={1}>
  //             <Outlet />
  //           </Box>
  //           <Footer />
  //         </Box>
  //       </CartProvider>
  //     </ProductProvider>
  //   </AuthProvider>
      
  // );
  // }
    // return (
  //   <Box sx={{ width: '100%', maxWidth: 400 }}>
  //     <Box
  //       sx={{ 
  //         height: 400, 
  //         bgcolor: '#f0ead6', 
  //         boxShadow: 'inset 0 0 .5rem #000', 
  //         borderRadius: 2,
  //         overflow: 'auto'
  //       }}
  //     >
  //       <FixedSizeList
  //         height={400}
  //         width='100%'
  //         itemSize={46}
  //         itemCount={users.length}
  //         overscanCount={5}
  //       >
  //         {renderRow}
  //       </FixedSizeList>
  //     </Box>
  //     <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
  //       <CreateUserDialog fetchUsers={fetchUsers} onUserCreated={onUserCreated} />
  //     </Box>
  //     <Snackbar open={snackbar.open} autoHideDuration={2000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
  //       <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant='filled' sx={{ width: '100%' }}>
  //         {snackbar.message}
  //       </Alert>
  //     </Snackbar>
  //   </Box>
  // );

    // const [snackbar, setSnackbar] = useState({
  //   open: false,
  //   message: '',
  //   severity: 'info',
  // });

  // const handleCloseSnackbar = () => {
  //   setSnackbar({ ...snackbar, open: false });
  // };

  // const onProductDeleted = () => {
  //   setSnackbar({
  //     open: true,
  //     message: 'The product was successfully deleted!',
  //     severity: 'success',
  //   });
  // };

  // const onProductCreated = () => {
  //   setSnackbar({
  //     open: true,
  //     message: 'The product was successfully created!',
  //     severity: 'success',
  //   });
  // };

  // const onProductUpdated = () => {
  //   setSnackbar({
  //     open: true,
  //     message: 'The product was successfully updated!',
  //     severity: 'success',
  //   });
  // };

        {/* <Snackbar open={snackbar.open} autoHideDuration={2000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant='filled' sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar> */}

      // productService

        // if (!cart) {
        //     cart = await db.cart.create({
        //         userId: userId,
        //         payed: false
        //     });
        // }

    // ratingRoute

    // const constraints = {
//     email: {
//         length: {
//             minimum: 4,
//             maximum: 200,
//             tooShort: '^The emailadress needs to be at least %{count} characters long.',
//             tooLong: '^The emailadress cannot be longer than %{count} characters.'
//         },
//         email: {
//             message: '^The emailadress is not valid.'
//         }  
//     }
// };

// cartRoute

// const constraints = {
//     email: {
//         length: {
//             minimum: 4,
//             maximum: 200,
//             tooShort: '^The emailadress needs to be at least %{count} characters long.',
//             tooLong: '^The emailadress cannot be longer than %{count} characters.'
//         },
//         email: {
//             message: '^The emailadress is not valid.'
//         }  
//     }
// };

// router.get('/', (req, res) => {
//     db.cart.findAll().then((result) => {
//         res.send(result);
//     })  
// });

// router.post('/', (req, res) => {
//     const cart = req.body;
//     const invalidData = validate(cart, constraints);
//     if(invalidData) {
//         res.status(400).json(invalidData);
//     } else {
//         db.cart.create(cart).then((result) => {
//             res.send(result);
//         })
//     }
// });
