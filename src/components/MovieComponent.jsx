import React from 'react'
import { Link } from 'react-router-dom'
const MovieComponent = ({movie}) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <article className='card'>
        <h3 className='card__title'>{movie.title}</h3>
        <div className='card__stars'>{movie.stars}</div>
        <img className='card__img' src={movie.img} alt={movie.title} />
      </article>
    </Link>
  )
}

export default MovieComponent