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
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="text-3xl text-primary font-bold">TO DO APP!</h2>
                    <div class="card-actions justify-center">
                    <button class="btn btn-primary" onClick={login}>Login</button>
                    <button class="btn btn-primary" onClick={register}>Register</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;