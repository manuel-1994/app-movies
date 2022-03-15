import React from 'react'
import {FaStar } from "react-icons/fa";

const ReviewForm = ({handdleAdd}) => {
  const stars = [5,4,3,2,1]
  const handdleSubmit = (event) =>{
    event.preventDefault()
    const rating = stars.filter((star, index)=> event.target[index+1].checked)
    const review = event.target[0].value

    if(review.trim().length <= 1){
      return;
    }
    handdleAdd(rating,review)
    event.target.reset()
  }

  
  return (
    <>
      <h2 className='reviews__title flex'>Comentarios</h2>
      <form onSubmit={handdleSubmit} className='form form-reviews' action="">
          <input className='form__input' type="text" name="review"/>
          <div className='stars'>
            {stars.map(star=> <>
              <input className='stars__input' type="radio" value={star} name="rate" id={"rate-"+star} />
              <label className='stars__label' htmlFor={"rate-"+star}>< FaStar/></label>
            </>)}
          </div>
          <button className='btn btn-form'>enviar</button>
      </form>
    </>
  )
}

export default ReviewForm