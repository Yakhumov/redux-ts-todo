import { createSlice, PayloadAction } from "@reduxjs/toolkit";             

 export type Todo = {
  id: string;
  title: string;
  completed: boolean; 
};

type TodoState = {
  list: Todo[];               
};

const initialState: TodoState = {
  list: [],                                        
};

const todoSlice = createSlice({
  name: "todos",
  initialState, 
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);      
    },
    handleChange: (state, action: PayloadAction<string>) => {
      state.list = state.list.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed; 
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, handleChange } = todoSlice.actions;
export default todoSlice.reducer;
