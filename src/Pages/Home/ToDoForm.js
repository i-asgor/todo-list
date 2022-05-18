import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const ToDoForm = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/todo`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(output => {
            // console.log(output);
        })
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card max-w-lg bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="text-3xl text-primary font-bold">TO DO APP!</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5">
                        <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                        <textarea placeholder='Description' {...register("description")} />
                        <input type="submit" value='Add Task' className='btn btn-primary' />
                    </form>                    
                </div>
            </div>

        </div>
    );
};

export default ToDoForm;