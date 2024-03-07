import { Link, Outlet } from 'react-router-dom';
// import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App;
