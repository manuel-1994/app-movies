const reviewsInitialState = []

const reviewsReducer = (state, action) => {
  switch (action.type) {
    case 'addReview':
      const {movie,stars,review} = action.payload
      const newReview = {
        review,
        stars,
        id: new Date().getTime(),
        movieId: movie.id
      }
      return [...state, newReview]
    case 'delReview':
      return [...action.payload]
    default:
      return state
  }
}

export {
  reviewsReducer,
  reviewsInitialState
}