import React from 'react'

const Banner = ({movie}) => {
  return (
    <div className='banner' >
      <img className='banner__img' src={movie.image.background} alt="" />
    </div>

  )
}

export default Banner