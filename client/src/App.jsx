import { Link, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
 
function App() { 

  return (
    <CartProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </CartProvider>
  )
}

export default App;
