import React from 'react'
import { useState, useEffect } from 'react'
import MovieList from '../MovieList/MovieList'
import { getMovies } from '../../service/movie'
import './MovieListContainer.css'

const MoviesListContainer = () => {

  const [movies, setMovies] = useState([])

  const [input, setInput] = useState("")

  useEffect(() => {
    getMovies(input)
      .then((movie) => setMovies(movie))
  }, [input])

  return (
    <>
      <input type="text" name='input' onChange={(e) => setInput(e.target.value)} className='inputSearch' />

      {input ? <MovieList movies={movies} /> : <h2>Ingrese el título que desea buscar</h2>}

    </>
  )
}

export default MoviesListContainer