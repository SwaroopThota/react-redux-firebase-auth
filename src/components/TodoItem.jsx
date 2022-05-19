import React from "react";
import { Button, Form, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../store/todoSlice";

const TodoItem = ({ todo }) => {
  const { id, text, completed } = todo;
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(
      toggleComplete({
        id,
        completed: !completed,
      })
    );
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTodo({ id }));
  };
  return (
    <ListGroupItem
      as='li'
      className='d-flex'
      variant={completed && "success"}
      action={!completed}
    >
      <Form.Group controlId='formBasicCheckbox' className='me-2'>
        <Form.Check
          type='checkbox'
          checked={completed}
          onChange={handleCheck}
        />
      </Form.Group>
      <p>{text}</p>
      {completed && (
        <Button
          variant='outline-danger'
          className='ms-auto'
          onClick={handleDelete}
        >
          Delete
        </Button>
      )}
    </ListGroupItem>
  );
};

export default TodoItem;
