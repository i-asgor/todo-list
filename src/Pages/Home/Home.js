import React from 'react';

const Home = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="text-3xl text-primary font-bold">TO DO APP!</h2>
                    <div class="card-actions justify-center">
                    <button class="btn btn-primary">Add Task</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;