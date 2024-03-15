import { createContext, useContext, useState, useEffect } from 'react';
import { getAll } from '../services/ProductService';


const ProductContext = createContext();

export const useProduct = () => {
    return useContext(ProductContext);
}


export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const productData = await getAll();
        setProducts(productData);
    };

    return (
        <ProductContext.Provider value={{ products, fetchProducts }}>
            {children}
        </ProductContext.Provider>
    );

}