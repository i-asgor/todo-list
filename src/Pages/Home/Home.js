import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const loginwithGoogle = () => {
        navigate('/todo')
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="text-3xl text-primary font-bold">TO DO APP!</h2>
                    <div class="card-actions justify-center">
                    <button class="btn btn-primary" onClick={loginwithGoogle}>Login With Google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;