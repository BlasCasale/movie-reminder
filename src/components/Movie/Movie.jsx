import React from 'react'
import { useState } from 'react'
import './Movie.css'


const Movie = ({ Poster, Title, Type, Year, loged, evaluateLike, imdbID, users }) => {

  const [style, setStyle] = useState("")

  const black = "black"

  const red = "red"

  const putStyle = () => {
    const user = users.find(user => user.mail === loged.mail)

    const findMovie = user.like.find(movie => movie.imdbID === imdbID)

    if (findMovie) {
      return setStyle(red)
    } else {
      return setStyle(black)
    }
  }

  setInterval(putStyle, 2000)

  return (
    <div className='card'>
      <h3 className='title'>{Title}</h3>
      <p className='desc'>{Type == "movie" ? "Película" : "Serie"}</p>
      <p className='desc'>{Year}</p>
      <img src={Poster} alt={Title} className='img' />
      {loged &&
        <>
          <button onClick={() => evaluateLike(imdbID, Title, Poster, Type, Year)} className={`btn-card ${style}`}><i className="bi bi-heart-fill"></i></button>
        </>
      }
    </div>
  )
}

export default Movie