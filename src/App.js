import React, { createContext, useState } from 'react';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/search' element={<PrivateRoute><Search/></PrivateRoute>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
