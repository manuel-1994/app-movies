import React, { useContext} from 'react'
import { useParams } from 'react-router-dom'
import { movieContext } from '../context/moviesContext'
import { reviewContext } from '../context/reviewsContext'

function Details() {
  const {movies, addStars, delStars} = useContext(movieContext)
  const {reviews, dispatchReviews} = useContext(reviewContext)
  const  {id} = useParams()
  const movie = movies.filter(movie=>movie.id===id)[0]

  const addReview= (event)=>{
    event.preventDefault()
    const stars = event.target[1].value
    const review = event.target[0].value
    dispatchReviews({type: "addReview", payload: {movie,stars,review}})
    addStars(movie,stars)
  }

  const handdleSub= (reviewId)=>{
    const newReviews = reviews.filter(review=> review.id!==reviewId)
    const reviewDeleted = reviews.filter(review=> review.id===reviewId)
    dispatchReviews({type: 'delReview', payload: newReviews })
    delStars(movie,reviewDeleted[0].stars)
  }

  return (
    <>
      <div className='banner' >
          <img className='banner__img' src={movie.image.background} alt="" />
      </div>
      
      <div className='wrapper'>
        <section className='ditails'>
          <h2 className='ditails__title'>{movie.title}</h2>
          <div className='ditails__content'>
            <p className='ditails__p'> {movie.overview}</p>
          </div>
        </section>

        <section  className='reviews'>
            <h2 className='reviews__title flex'>Comentarios</h2>
            <form onSubmit={addReview} className='form' action="">
              <input className='form__input' type="text" name="review"/>
              <select>
                <option className='form__option' value="1">1</option>
                <option className='form__option' value="2">2</option>
                <option className='form__option' value="3">3</option>
                <option className='form__option' value="4">4</option>
                <option className='form__option' value="5">5</option>
              </select>
              <button className='btn btn-form'>enviar</button>
            </form>
            <div className='reviews__content'>
              {reviews.map((review, index)=> review.movieId===id&&<div key={index}>
                <p>{review.review}</p>
                <button>editar</button>
                <button onClick={()=>handdleSub(review.id)}>borrar</button>
              </div>)}
            </div>
        </section>
      </div>
    </>
  )
}

export default Details