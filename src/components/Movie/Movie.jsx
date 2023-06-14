import React from 'react'
import './Movie.css'

const Movie = ({Poster, Title, Type, Year}) => {

  return (
    <div className='card'>
      <h3 className='title'>{Title}</h3>
      <p className='desc'>{Type == "movie" ? "Película" : "Serie"}</p>
      <p className='desc'>{Year}</p>
      <img src={Poster} alt={Title} className='img'/>
    </div>
  )
}

export default Movie