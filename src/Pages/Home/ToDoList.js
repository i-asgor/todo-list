import React from 'react';
import CustomToDo from '../../Hooks/CustomToDo';
import ToDoData from './ToDoData';

const ToDoList = () => {
    const [todo, setTodo] = CustomToDo([]);
    console.log(todo)

    const todoDelete = id =>{
        // console.log(id);
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url = `http://127.0.0.1:5000/todo/${id}`;
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
        console.log(id)
    }

    return (

        <div className='flex justify-center items-center h-screen'>
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