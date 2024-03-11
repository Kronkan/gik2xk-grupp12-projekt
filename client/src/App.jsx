import { Link, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useState } from 'react';
 
function App() { 

  // const [userState, SetUserState] = useState(1);
  
  // function ensureUserId() {
  //   let userId = localStorage.getItem('userId');
  //   if (!userId) {
  //     userId = 'uid_' + Date.now().toString(36) + Math.random().toString(36).substr(2);
  //     localStorage.setItem(userId);
  //   }
  //   return userId;
  // }

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App;
