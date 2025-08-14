import React from 'react'
import MovieForm from '../MovieForm'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { movieAddToDatabase_Action } from '../../../tools/actions/movieAction'

const AddMovie = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <>
                <h1 className='alert alert-dark my-5 text-center'>Add Movie</h1>
            <MovieForm sendData={fd => {
                dispatch(movieAddToDatabase_Action(fd))
                navigate('/dashboard')

            }} />

        </>
    )
}

export default AddMovie