import React from 'react';

const ToDoData = ({t,todoDelete}) => {
    return (
        <tr>
            <td>{t.name}</td>
            <td>{t.description}</td>
            <td>
                <button onClick={()=>todoDelete(t._id)} className='btn btn-error btn-xs'>Delete</button>
            </td>
        </tr>
    );
};

export default ToDoData;