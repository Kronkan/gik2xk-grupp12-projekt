import { createContext, useState, useContext, useEffect } from 'react';
import { getCart } from '../services/UserService';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [userCart, setUserCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        const userId = 1;
        const cartData = await getCart(userId);
        if (cartData) {
        setUserCart(cartData.products);
        setTotalPrice(cartData.totalPrice);
        } else {
        setUserCart([]);
        setTotalPrice(0);
        }
    };
    
    return (
        <CartContext.Provider value={{ userCart, totalPrice, fetchCart }}>
            {children}
        </CartContext.Provider>
    );
}