import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
 
function App() { 

  return (
    <CartProvider>
      <Grid container direction="column" sx={{ minHeight: '100vh' }}>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item xs>
          <Outlet />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </CartProvider>
  );
}

export default App;
