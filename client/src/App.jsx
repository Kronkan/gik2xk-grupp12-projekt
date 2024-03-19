import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';
import { SnackbarProvider } from './contexts/SnackbarContext';

function AppContent() {
  const { currentUser } = useAuth();
  const location = useLocation();

  const showNavBar = currentUser && location.pathname !== '/';

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {showNavBar && <NavBar />}
      <Box component="main" flexGrow={1}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
 
function App() { 
  return (
    <AuthProvider>
      <SnackbarProvider>
        <ProductProvider>
          <CartProvider>
            <AppContent />
          </CartProvider>
        </ProductProvider>
      </SnackbarProvider>
    </AuthProvider>  
  );
}

export default App;
