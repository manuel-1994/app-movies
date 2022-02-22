import React, { useContext } from 'react'
import MoviesComponent from '../components/MoviesComponent'
import { movieContext } from '../context/moviesContext'

const Movies = () => {
   const {movies} =useContext(movieContext)

  return (
    <MoviesComponent movies={movies}/>
  )
}

export default Movies