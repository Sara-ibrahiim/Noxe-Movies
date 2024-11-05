import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import People from './Components/People/People';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import TvShow from './Components/TvShow/TvShow';
import NotFound from './Components/NotFound/NotFound';
import MoviesDetails from './Components/MoviesDetails/MoviesDetails';
import {jwtDecode} from 'jwt-decode';
import { RouterProvider, createBrowserRouter ,createHashRouter} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {
useEffect(()=>{
  if (localStorage.getItem('userToken')!== null) {
    saveUserData()
    
  }
},[])
const [userData, setuserData] = useState(null)
function saveUserData() {
  let encodedToken = localStorage.getItem('userToken');
  let decodedToken = jwtDecode(encodedToken)
  setuserData(decodedToken)
  
}

  let routers = createHashRouter([
    {path:'',element:<Layout userData={userData} setuserData={setuserData}/>,children:[
      {path: 'home',element:<ProtectedRoute> <Home/></ProtectedRoute>},
      {path: 'movies',element:<ProtectedRoute><Movies/> </ProtectedRoute>},
      {path: 'moviesDetails/:id/:mediaType',element:<ProtectedRoute><MoviesDetails/> </ProtectedRoute>},
      {path: 'people',element:<ProtectedRoute><People/> </ProtectedRoute>},
      {path: 'login',element:<Login saveUserData={saveUserData}/>},
      {index:true,element:<Register/>},
      {path: 'tvshow',element:<ProtectedRoute><TvShow/> </ProtectedRoute>},
      {path: '*',element:<ProtectedRoute> <NotFound/></ProtectedRoute>},
      
    ]}
  ])
  return <RouterProvider router={routers}></RouterProvider>
 
}

export default App;
