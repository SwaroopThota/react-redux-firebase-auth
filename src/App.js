import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { LoadingScreen } from './components/LoadingScreen'
import Login from './components/Login'
import { auth } from './firebase/firebase-config'
import { setLoading, signInUser } from './store/userSlice'

function App() {
	const dispatch = useDispatch()
	const loading = useSelector((state) => state.user.loading)
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { email, displayName, photoURL } = user
				dispatch(signInUser({ email, displayName, photoURL }))
			} else dispatch(setLoading(false))
		})
		return unsubscribe
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<Container
			className='d-flex justify-content-center align-items-center flex-column mt-2'
			style={{ minHeight: '80vh' }}
		>
			{loading ? (
				<LoadingScreen />
			) : (
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			)}
		</Container>
	)
}

export default App
