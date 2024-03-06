import { Link, Outlet } from 'react-router-dom';

function App() {
  

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/product/new">Handle products</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default App;
