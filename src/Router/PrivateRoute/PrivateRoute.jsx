import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { loginUser, loading } = useContext(AuthContex);
    const location = useLocation()

    if (loading) {
        return <div className='flex justify-center mt-32'><button className="btn loading">loading...marker:</button></div>
    }

    if (loginUser?.uid) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;