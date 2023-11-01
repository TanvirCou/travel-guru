import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();

    return (localStorage.getItem('token') || loggedInUser.success) ? (children) : 
    <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;