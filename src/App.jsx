import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home'
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { createContext, useState } from "react";
import Booking from "./components/Booking/Booking";
import Destination from "./components/Destination/Destination";
import PublicRoute from './components/AuthRoute/PublicRoute';
import PrivateRoute from './components/AuthRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />
          <Route path="/signup" element={<PublicRoute> <SignUp /> </PublicRoute>} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/destination/:id" element={<PrivateRoute><Destination /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
