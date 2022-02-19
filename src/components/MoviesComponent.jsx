import React from 'react'
import MovieComponent from './MovieComponent'

const MoviesComponent = ({movies}) => {
  return (
    <section className='movies wrapper'>
      {movies.map(movie=><MovieComponent key={movie.id} movie={movie}/>)}
    </section>
  )
}

export default MoviesComponent