import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/style.scss'
import { MoviesContext } from './context/moviesContext';
import reportWebVitals from './reportWebVitals';
import { ReviewsContext } from './context/reviewsContext';

ReactDOM.render(
  <React.StrictMode>
    <MoviesContext>
      <ReviewsContext>
        <App />
      </ReviewsContext>
    </MoviesContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
