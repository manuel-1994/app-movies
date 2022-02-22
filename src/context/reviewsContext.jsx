import React, { createContext, useState } from 'react'

const reviewContext = createContext()

const ReviewsContext = ({children}) => {

  const[reviews, setReviews] =useState([])
  
  return (
    <reviewContext.Provider value={{reviews, setReviews}}>
      {children}
    </reviewContext.Provider>
  )
}

export {
  ReviewsContext,
  reviewContext
}