import React from 'react'
import Movie from '../Movie/Movie'
import './MovieList.css'
import { LoginContext } from '../../context/LoginContext.jsx'
import { useContext } from 'react'

const MoviesList = ({ movies }) => {

  const { loged } = useContext(LoginContext)

  return (
    <main className='layout'>
      {movies != undefined ? movies.map(item => <Movie key={item.imdbID} {...item} loged={loged} />) : <h2>Esa película no esta disponible. Intente con otra.</h2>}
    </main>
  )
}

export default MoviesList