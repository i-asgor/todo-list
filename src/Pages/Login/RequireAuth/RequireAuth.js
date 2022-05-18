import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    if(!user){
        return <Link to="/login" state={{from: location}} replace></Link>
    }
    return children;
};

export default RequireAuth;