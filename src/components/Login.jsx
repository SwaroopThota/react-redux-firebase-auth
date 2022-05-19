import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase/firebase-config'
import { signInUser } from '../store/userSlice'

const Login = () => {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user.currentUser)
	if (user) return <Navigate to='/' />
	const handleSignIn = async () => {
		const { email, displayName, photoURL } = await signInWithRedirect(
			auth,
			new GoogleAuthProvider()
		)
		dispatch(signInUser({ email, displayName, photoURL }))
	}
	return <GoogleButton onClick={handleSignIn} />
}

export default Login
