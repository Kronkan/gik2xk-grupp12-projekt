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