import React, { useState } from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice'

const TodoForm = () => {
	const [todoValue, setTodoValue] = useState('')
	const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault()
		if (todoValue.trim().length === 0) return
		dispatch(addTodo({ id: Date.now(), text: todoValue, completed: false }))
		setTodoValue('')
	}
	return (
		<InputGroup>
			<FormControl
				className='pb-3'
				placeholder='Add a new todo'
				value={todoValue}
				onChange={(e) => setTodoValue(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') handleSubmit(e)
				}}
			/>
			<Button variant='outline-primary' onClick={handleSubmit}>
				+
			</Button>
		</InputGroup>
	)
}

export default TodoForm
