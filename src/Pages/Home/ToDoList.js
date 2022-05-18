import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomToDo from '../../Hooks/CustomToDo';
import ToDoData from './ToDoData';

const ToDoList = () => {
    const [todo, setTodo] = CustomToDo([]);
    const navigate = useNavigate();
    // console.log(todo)

    const todoDelete = id =>{
        // console.log(id);
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url = `https://protected-ocean-76841.herokuapp.com/todo/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = todo.filter(t => t._id !== id);
                setTodo(remaining);
            });
        }
        // console.log(id)
    }

    const AddTask = () =>{
        navigate('/todo');
    }

    return (

        <div className='flex flex-col justify-center items-center h-screen'>
            <button onClick={AddTask} className='btn btn-primary'>Add a Task</button>
            <div className="card max-w-xl bg-base-100 shadow-xl">
            <div className="card-body">
            <div className="overflow-x-auto flex justify-center items-center">  
                <table className="table table-zebra w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            todo.map(t => <ToDoData key={t._id} t={t} todoDelete={todoDelete}></ToDoData>)
                        }    
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default ToDoList;