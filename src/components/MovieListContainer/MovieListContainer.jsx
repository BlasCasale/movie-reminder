import React from 'react'
import { useState, useEffect } from 'react'
import MovieList from '../MovieList/MovieList'
import axios from 'axios'
import './MovieListContainer.css'

const MoviesListContainer = () => {

  const [movies, setMovies] = useState([])

  const [input, setInput] = useState("")

  const apiKey = `dc2ddbc3`
  
  useEffect(() => {

    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${input}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
      const movieArray = data.data.Search
      setMovies(movieArray)
    })

  }, [input])

  return (
    <>
      <input type="text" name='input' onChange={(e) => setInput(e.target.value)} className='inputSearch'/>

      <MovieList movies={movies}/>
    
    </>
  )
}

export default MoviesListContainer