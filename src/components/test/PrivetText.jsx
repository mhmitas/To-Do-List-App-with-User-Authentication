import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../provider/UserProvider';

const PrivetText = ({ children }) => {
    const { user, isLoading } = useContext(UserContext)
    if (isLoading) {
        return <h3 className='text-5xl'>Loading...</h3>
    }
    if (!user) {
        return <Navigate to="/login"></Navigate>
    }
    return children
};

export default PrivetText;