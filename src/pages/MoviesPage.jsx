import React, { useContext } from 'react'
import MoviesComponent from '../components/MoviesComponent'
import { movieContext } from '../context/moviesContext'

const MoviesPage = () => {
   const {movies} =useContext(movieContext)

  return (
    <MoviesComponent movies={movies}/>
  )
}

export default MoviesPage