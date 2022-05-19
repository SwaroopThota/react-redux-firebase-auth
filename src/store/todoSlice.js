import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Learn Redux", completed: false },
  { id: 3, text: "Learn React-Redux", completed: true },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo.completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
