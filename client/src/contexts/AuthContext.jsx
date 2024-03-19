import { createContext, useState, useContext } from 'react';
import { login } from '../services/UserService'; 

const AuthContext = createContext(); 

export const useAuth = () => {
    return useContext(AuthContext);
  };

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const signIn = async (email, password) => {
        const loginData = await login(email, password);
        if (loginData && loginData.userId) {
            setCurrentUser({ userId: loginData.userId })
        } else {
            throw new Error('Login failed'); 
        }
    }

    const signOut = () => {
        setCurrentUser(null);
    }
    
    return (
        <AuthContext.Provider value={{ currentUser, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );  
}

