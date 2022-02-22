import React, { createContext,useReducer} from 'react'
import { moviesInitialState, moviesReducer } from '../reducer/moviesReducer'


const movieContext = createContext()

const MoviesContext = ({children}) => {
  const [movies, dispatchMovies] = useReducer(moviesReducer, moviesInitialState)

  const addStars = (movie, stars) =>{
      movie.stars += parseInt(stars)
      movie.numberOfReviews++
      dispatchMovies({type:"addStars", payload:movie})
  }

  const delStars = (movie,stars) =>{
    movie.stars -=  parseInt(stars)
    movie.numberOfReviews-- 
    dispatchMovies({type:"delStars", payload:movie})
  }

  return (
    <movieContext.Provider value={{movies, addStars, delStars}}>
        {children}
    </movieContext.Provider>
  )
}

export {
  MoviesContext,
  movieContext
}