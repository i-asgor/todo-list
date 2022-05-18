import React from 'react';
import CustomToDO from '../../Hooks/CustomToDo';

const ToDoList = () => {
    const [todo, setTodo] = CustomToDO([]);
    const todoDelete = id =>{
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url = `http://localhost:5000/todo/${id}`;
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

    return (

        <div className='flex justify-center items-center h-screen'>
            <div class="card max-w-xl bg-base-100 shadow-xl">
            <div class="card-body">
            <div class="overflow-x-auto flex justify-center items-center">
                <table class="table table-zebra w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {
                            todo.map(t => <>
                            <td>{t.name}</td>
                            <td>{t.description}</td>
                            <td>
                                <button onClick={()=>todoDelete(todo._id)} className='btn btn-error btn-xs'>Delete</button>
                            </td>
                            </>)
                        }
                        
                    </tr>      
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default ToDoList;