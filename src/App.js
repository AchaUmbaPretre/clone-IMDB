import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import MovieId from './pages/MovieId/MovieId';
import MovieType from './pages/MovieType/MovieType';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';

function App() {

  const Layout =()=>{
    return (
      <>
        <Topbar/>
        <Outlet/>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [ 
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/movie/:id',
          element: <MovieId/>,
        },
        {
          path: '/movies/:type',
          element: <MovieType/>
        }
      ]
    }

  ])
  return (
    <div className='app'>
      {/*< Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:Id' element={<h1>iD PAGE</h1>} />
          <Route path='/movies/:type' element={<MovieType/>}/>
        </Routes>
      </Router> */}
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
