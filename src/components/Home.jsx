import { signOut } from 'firebase/auth'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase/firebase-config'
import { signOutUser } from '../store/userSlice'
import TodoContainer from './TodoContainer'

const Home = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user.currentUser)
	if (!user) return <Navigate to='/login' />
	const handleSignOut = async () => {
		await signOut(auth)
		dispatch(signOutUser())
	}
	return (
		<div className='my-3 p-3 border border-rounded col-12 col-lg-8'>
			<div className='d-flex flex-column justify-content-center align-items-center'>
				<img src={user.photoURL} alt='profilePic' />
				<p>
					Hello <strong>{user.displayName}</strong>
				</p>
				<Button variant='danger' onClick={handleSignOut}>
					Sign out
				</Button>
			</div>
			<h3>Todo List</h3>
			<TodoContainer />
		</div>
	)
}

export default Home
