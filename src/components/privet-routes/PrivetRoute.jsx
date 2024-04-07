import React, { useContext } from 'react';
import { UserContext } from '../../provider/UserProvider';
import { Audio } from 'react-loader-spinner';
import { useLocation, Navigate } from 'react-router-dom';


const PrivetRoute = ({ children }) => {
    const { user, isLoading } = useContext(UserContext)

    const location = useLocation()
    console.log(location);

    if (isLoading) {
        return (
            <div className='absolute top-1/2 left-1/2'>
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="#7480ff"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoute;