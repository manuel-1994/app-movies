import React, { useContext} from 'react'
import {useParams } from 'react-router-dom'
import Details from '../components/Details'
import ReviewForm from '../components/ReviewForm'
import ReviewsList from '../components/ReviewsList'
import { movieContext } from '../context/moviesContext'
import { reviewContext } from '../context/reviewsContext'


const DetailsPage = () => {
  const {movies, dispatchMovies} = useContext(movieContext)
  const {reviews, dispatchReviews} = useContext(reviewContext)
  const  {id} = useParams()
  const movie = movies.filter(movie=>movie.id===id)[0]

  const handdleAdd= (stars,review)=>{
    dispatchReviews({type: "addReview", payload: {movie,stars,review}})
    dispatchMovies({type:"addStars", payload:{id:movie.id, stars}})
  }

  const handdleDelete= (newReviews,stars)=>{
    dispatchReviews({type: 'delReview', payload: newReviews })
    dispatchMovies({type:"delStars", payload:{id:movie.id, stars}})
  }

  return (
    <>
        <Details movie={movie}/>
        <section  className='reviews flex wrapper'>
            <ReviewForm handdleAdd={handdleAdd}/>
            <ReviewsList handdleDelete={handdleDelete} reviews={reviews} id={id} />
        </section>
    </>
  )
}

export default DetailsPage