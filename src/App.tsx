import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import InputFilt from "./components/TodoForm";
import { useAppDispatch } from "./hook";
import {addTodo} from './store/todoSlice'         

function App() {
  const [title, setTitle] = useState('');   
  const  dispatch  = useAppDispatch();         

  const addTask =() => {
    if(title){                      
      dispatch(addTodo(title))  
      setTitle('')                     

    }
  };
  
  return (
    <div className="App">
      <InputFilt  title={title} handleInput={setTitle} handleSubmit={addTask}   /> 
         <TodoList/>              
    </div>
  );                
}

export default App;
