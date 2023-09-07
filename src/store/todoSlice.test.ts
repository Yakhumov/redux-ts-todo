import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { TodoState } from './todoSlice'
import { Todo } from "./todoSlice";
import {
  addTodo,
  removeTodo,
  handleChange,
} from './todoSlice'

describe("Todo Slice Tests", () => {
  let store: TodoState = {
      

  }
  

  beforeEach(() => {
    store = configureStore({
      reducer: {
        todos: todoReducer , // Замените на ваш редюсер
      },
    });
  });

  it("should add a new todo", () => {
    const todoText = "New Todo";
    store.dispatch(addTodo(todoText));

    const state = store.getState().todos.list;
    expect(state.length).toBe(1);
    expect(state[0].title).toBe(todoText);
    expect(state[0].completed).toBe(false);
  });

  it("should remove a todo", () => {
    const todoIdToRemove = "1"; // Замените на реальный ID задачи

    // Добавьте задачу для удаления
    store.dispatch(addTodo("Todo to Remove"));

    // Удалите задачу по ID
    store.dispatch(removeTodo(todoIdToRemove));

    const state = store.getState().todos.list;
    expect(state.length).toBe(0);
  });

  it("should toggle todo completion", () => {
    const todoIdToToggle = "1"; // Замените на реальный ID задачи

    // Добавьте задачу для переключения состояния
    store.dispatch(addTodo("Toggle Todo"));

    // Переключите состояние задачи по ID
    store.dispatch(handleChange(todoIdToToggle));

    const state = store.getState().todos.list;
    const toggledTodo = state.find((todo) => todo.id === todoIdToToggle);

    expect(toggledTodo.completed).toBe(true);
  });
});
