import React from 'react'
import './Movie.css'


const Movie = ({ Poster, Title, Type, Year, loged, evaluateLike, imdbID, putStyle }) => {

  /*
  putStyle(imdbID)

  <i className="bi bi-heart-fill"></i>
  */
  return (
    <div className='card'>
      <h3 className='title'>{Title}</h3>
      <p className='desc'>{Type == "movie" ? "Película" : "Serie"}</p>
      <p className='desc'>{Year}</p>
      <img src={Poster} alt={Title} className='img' />
      {loged &&
        <>
          <button onClick={() => evaluateLike(imdbID, Title)} className={`btn-card`}>X</button>
        </>
      }
    </div>
  )
}

export default Movie