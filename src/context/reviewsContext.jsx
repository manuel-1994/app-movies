import React, { createContext, useReducer } from 'react'
import { reviewsInitialState, reviewsReducer } from '../reducer/reviewsReducer'

const reviewContext = createContext()

const ReviewsContext = ({children}) => {
  const [reviews, dispatchReviews] = useReducer(reviewsReducer, reviewsInitialState)

  return (
    <reviewContext.Provider value={{reviews, dispatchReviews}}>
      {children}
    </reviewContext.Provider>
  )
}

export {
  ReviewsContext,
  reviewContext
}