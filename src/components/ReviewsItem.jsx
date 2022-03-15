import React from 'react'

const ReviewsItem = ({review, handdleClick}) => {

  return (
        <li className='reviews__items flex'>
            <div className='reviews__avatar'>
              <img className='reviews__img' src="https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg" alt="avatar" /> 
            </div>

            <div className='reviews_box'>
              <div className='reviews__head flex'>
                <h6>nombre de autor</h6>
                <span>tiempo de creacion</span>
                <button>editar</button>
                <button onClick={()=>handdleClick(review.id)}>borrar</button>
              </div>
              <p>{review.review}</p>
            </div>
        </li>
  )
}

export default ReviewsItem