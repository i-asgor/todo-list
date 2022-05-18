import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ToDoForm from './Pages/Home/ToDoForm';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ToDoList from './Pages/Home/ToDoList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/todo' element={
          <RequireAuth>
            <ToDoForm />
          </RequireAuth>
        }></Route>
        <Route path='/todo-list' element={
          <RequireAuth>
            <ToDoList />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
