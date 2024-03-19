import { createContext, useState, useContext, useEffect } from 'react';
import { login } from '../services/UserService'; 

const AuthContext = createContext(); 

export const useAuth = () => {
    return useContext(AuthContext);
  };

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            setCurrentUser({ userId });
        }
    }, []);

    const signIn = async (email, password) => {
        const loginData = await login(email, password);
        if (loginData && loginData.userId) {
            localStorage.setItem('userId', loginData.userId);
            setCurrentUser(loginData)
        } else {
            throw new Error('Login failed'); 
        }
    }

    const signOut = () => {
        localStorage.removeItem('userId');
        setCurrentUser(null);
         
     }
    
    return (
        <AuthContext.Provider value={{ currentUser, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );  
}

