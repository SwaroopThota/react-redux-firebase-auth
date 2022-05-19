import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const todos = useSelector((state) => state.todos);
  const completedCount = useSelector(
    (state) => state.todos.filter((todo) => todo.completed).length
  );
  const todosCount = useSelector((state) => state.todos.length);
  return (
    <ListGroup as='ul' className='mt-3'>
      <ListGroup.Item as='li' className='border-0 p-0'>
        <TodoForm />
      </ListGroup.Item>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <ListGroup.Item as='li' disabled>
        {todosCount === 0
          ? "UwU! so empty..."
          : `Completed : ${completedCount}`}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default TodoContainer;
