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


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/destination/:id" element={<Destination />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
