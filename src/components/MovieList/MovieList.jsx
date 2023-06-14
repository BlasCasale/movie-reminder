import React from 'react'
import Movie from '../Movie/Movie'
import './MovieList.css'

const MoviesList = ({ movies }) => {

  return (
    <main className='layout'>
      {movies != undefined ? movies.map(item => <Movie key={item.imdbID} {...item}/>) : <h2>Esa película no esta disponible. Intente con otra.</h2>}
    </main>
  )
}

export default MoviesList