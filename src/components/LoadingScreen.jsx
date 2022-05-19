import React from 'react'
import { Spinner } from 'react-bootstrap'

export const LoadingScreen = () => {
	return (
		<>
			<p className='text-secondary'>Please wait for a second...</p>
			<Spinner animation='border' variant='primary' />
		</>
	)
}
