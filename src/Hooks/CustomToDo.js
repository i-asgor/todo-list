import { useEffect, useState } from "react";


const CustomToDo = ()=> {
    const [todo, setTodo] = useState([]);

    useEffect(() =>{
        fetch(`http://127.0.0.1:5000/todo`)
        .then(res => res.json())
        .then(data => setTodo(data))
    },[])
    return [todo, setTodo];
}

export default CustomToDo;