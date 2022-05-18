import { useEffect, useState } from "react";


const CustomToDo = ()=> {
    const [todo, setTodo] = useState([]);

    useEffect(() =>{
        fetch(`https://protected-ocean-76841.herokuapp.com/todo`)
        .then(res => res.json())
        .then(data => setTodo(data))
    },[])
    return [todo, setTodo];
}

export default CustomToDo;