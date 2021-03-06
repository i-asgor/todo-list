import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const ToDoForm = () => {
    const navigate = useNavigate();
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
            navigate('/todo-list');
        })
        
    }

    const TaskList = () => {
        navigate('/todo-list');
    }
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <button onClick={TaskList} className='btn btn-primary'>Task List</button>
            <div className="card max-w-lg bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-3xl text-primary font-bold">TO DO APP!</h2>
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