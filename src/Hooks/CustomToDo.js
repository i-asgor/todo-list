import { useEffect, useState } from "react";


const CustomToDO = ()=> {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch(`http://127.0.0.1:5000/todo`)
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return [items, setItems];
}

export default CustomToDO;