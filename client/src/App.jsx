import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';
 
function App() { 

  return (
    <ProductProvider>
      <CartProvider>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <NavBar />
          <Box component="main" flexGrow={1}>
            <Outlet />
          </Box>
          <Footer />
        </Box>
      </CartProvider>
    </ProductProvider>
      
  );
}

export default App;
