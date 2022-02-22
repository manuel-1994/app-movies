import React, { useContext} from 'react'
import { useParams } from 'react-router-dom'
import { movieContext } from '../context/moviesContext'
import { reviewContext } from '../context/reviewsContext'

function Details() {
  const {movies} = useContext(movieContext)
  const {reviews,setReviews} = useContext(reviewContext)
  const  {id} = useParams()
  const movie = movies.filter(movie=>movie.id===id)[0]
  const review = reviews.filter(review=>review.movieId===id)

  const addReview= (event)=>{
    event.preventDefault()
    setReviews([...reviews, {
      review: event.target[0].value,
      point: event.target[1].value,
      movieId: movie.id,
      id: review.length
    }])
    movie.stars += parseInt(event.target[1].value)
  }

  const subHanddle= (reviewId)=>{
    const newReview = reviews.filter(review=> {
      if(review.id=== reviewId && review.movieId===id){
        movie.stars -= parseInt(review.point)
      }
      return (review.movieId!==id) || (review.movieId===id && review.id!==reviewId)
    })

    setReviews(newReview)
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
                <button onClick={()=>subHanddle(review.id)}>borrar</button>
              </div>)}
            </div>
        </section>
      </div>
    </>
  )
}

export default Details