import React, { createContext,useReducer} from 'react'
import { moviesInitialState, moviesReducer } from '../reducer/moviesReducer'


const movieContext = createContext()

const MoviesContext = ({children}) => {
  const [movies, dispatchMovies] = useReducer(moviesReducer, moviesInitialState)
  
  return (
    <movieContext.Provider value={{movies, dispatchMovies}}>
        {children}
    </movieContext.Provider>
  )
}

export {
  MoviesContext,
  movieContext
}