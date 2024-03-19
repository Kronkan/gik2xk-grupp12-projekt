import { createContext, useState, useContext, useEffect } from 'react';
import { getCart } from '../services/UserService';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const { currentUser } = useAuth();
    const [userCart, setUserCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        if (currentUser) {
            fetchCart(currentUser.userId);
        }   
    }, [currentUser]);

    const fetchCart = async (userId) => {
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