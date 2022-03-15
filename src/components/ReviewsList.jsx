import React from 'react'
import ReviewsItem from './ReviewsItem'

const ReviewsList = ({reviews, handdleDelete, id}) => {

  const handdleClick = (reviewId) =>{
    const newReviews = reviews.filter(review=> review.id!==reviewId)
    const reviewDeleted = reviews.filter(review=> review.id===reviewId)
    const stars = reviewDeleted[0].stars

    handdleDelete(newReviews,stars)
  }
  
  return (
    <ul className='reviews__list flex'>
      {reviews.map((review)=> review.movieId===id&&
        <ReviewsItem key={review.id} review={review} handdleClick={handdleClick}/> 
      )}   
    </ul>
  )
}

export default ReviewsList