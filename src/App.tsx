import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import InputFilt from "./components/TodoForm";
import { useAppDispatch } from "./hook";
import { Todo, addTodo } from './store/todoSlice';
import { useAppSelector } from "./hook";


function App() {
  const [title, setTitle] = useState('');   
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos.list)              

  const addTask = () => {
    if (title) {
      dispatch(addTodo(title));  
      setTitle('');
    }
  };


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <InputFilt   title={title} handleInput={setTitle} handleSubmit={addTask} />
      <TodoList  />
    </div>
  );
}

export default App; 
