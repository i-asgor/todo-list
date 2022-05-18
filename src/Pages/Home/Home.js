import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate('/login')
    }
    const register = () => {
        navigate('/register')
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card max-w-lg bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-3xl text-primary font-bold">TO DO APP!</h2>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={login}>Login</button>
                    <button className="btn btn-primary" onClick={register}>Register</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;