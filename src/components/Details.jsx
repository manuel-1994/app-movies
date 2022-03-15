import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'

const Details = ({movie}) => {
  return (
    <section className='details'>
      <Banner movie={movie} />
      
      <div className='details__container wrapper'>
        <h1 className='details__title text-margin'>{movie.title}</h1>
        <div className='details__box text-margin'>
          <p className='details__content'> {movie.overview}</p>
          <ul className='details__list text-margin'>
            <li className='details__item text-margin'>
              Director: <Link to="/director">{movie.director}</Link>
            </li>  
            <li className='details__item text-margin'>
              Genero: {movie.gender.map(gender=> <Link key={gender} to="/gender">{gender}</Link>)} 
            </li>
          </ul>
        </div>
      </div>
  </section>
  )
}

export default Details