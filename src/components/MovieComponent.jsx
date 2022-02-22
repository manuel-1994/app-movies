import React from 'react'
import { Link } from 'react-router-dom'
const MovieComponent = ({movie}) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <article className='card flex'>
          <img className='card__img' src={movie.image.poster} alt={movie.title} />  
        <div className='card__content'>
          <div className='card__stars flex'>{movie.stars}</div>
          <h3 className='card__title'>{movie.title}</h3>
        </div>
      </article>
    </Link>
  )
}

export default MovieComponent