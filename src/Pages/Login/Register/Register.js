import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const handleRegister = async(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        await createUserWithEmailAndPassword(email,password);
        if(user){
            navigate('/todo')
        }
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="text-3xl text-primary font-bold">TO DO APP!</h2>
                    <form onSubmit={handleRegister} className="grid gap-3">
                        <input type="text" placeholder="Name" name='name' class="input input-bordered input-sm w-full max-w-sm" required />
                        <input type="email" placeholder="Email" name='email' class="input input-bordered input-sm w-full max-w-sm" required />
                        <input type="password" placeholder="Password" name='password' class="input input-bordered input-sm w-full max-w-sm" required />
                        <div class="card-actions justify-center">
                        <input type="submit" class="btn btn-primary" />
                        </div>
                    </form>                    
                </div>
            </div>

        </div>
    );
};

export default Register;