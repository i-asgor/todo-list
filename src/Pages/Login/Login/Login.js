import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    if(user){
        navigate('/todo');
     }

    const HandleLogin = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="text-3xl text-primary font-bold">TO DO APP!</h2>
                    <form onSubmit={HandleLogin} className="grid gap-3">
                        <input type="email" placeholder="Email" ref={emailRef} class="input input-bordered input-sm w-full max-w-sm" required />
                        <input type="password" placeholder="Password" ref={passwordRef} class="input input-bordered input-sm w-full max-w-sm" required />
                        <div class="card-actions justify-center">
                        <input type="submit" class="btn btn-primary" />
                        </div>
                    </form>
                    <p>New to TODO APPS? <Link className='btn btn-primary btn-sm text-white pe-auto text-decoration-none' to='/register'>Please SignUp</Link></p>                 
                </div>
            </div>

        </div>
    );
};

export default Login;