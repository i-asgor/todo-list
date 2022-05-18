import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    if(user){
        navigate('/todo')
    }

    const handleRegister = async(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        await createUserWithEmailAndPassword(email,password);
        
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card max-w-lg bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-3xl text-primary font-bold">TO DO APP!</h2>
                    <form onSubmit={handleRegister} className="grid gap-3">
                        <input type="text" placeholder="Name" name='name' className="input input-bordered input-sm w-full max-w-sm" required />
                        <input type="email" placeholder="Email" name='email' className="input input-bordered input-sm w-full max-w-sm" required />
                        <input type="password" placeholder="Password" name='password' className="input input-bordered input-sm w-full max-w-sm" required />
                        <div className="card-actions justify-center">
                        <input type="submit" className="btn btn-primary" />
                        </div>
                    </form>  
                    <p>Are You Already Account?<Link className='btn btn-primary btn-sm text-white pe-auto text-decoration-none' to='/login'>Please Login</Link></p>                                   
                </div>
            </div>

        </div>
    );
};

export default Register;