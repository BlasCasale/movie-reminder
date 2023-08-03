import React from 'react'
import Movie from '../Movie/Movie'
import './MovieList.css'
import { LoginContext } from '../../context/LoginContext.jsx'
import { useContext } from 'react'
import { db } from '../../service/config'
import { doc, updateDoc } from 'firebase/firestore'
import { useUsersChange } from '../../hooks/useUsersChange'

const MoviesList = ({ movies }) => {

  const { users } = useUsersChange()

  const { loged } = useContext(LoginContext)

  const quitLike = (imdbID, user, userRef) => {
    const like = user.like.filter(movie => movie.imdbID !== imdbID)

    const userUpdated = {
      name: loged.name,
      surname: loged.surname,
      pass: loged.pass,
      mail: loged.mail,
      img: loged.img,
      id: loged.id,
      like
    }

    updateDoc(userRef, userUpdated)
  }

  const putLike = (imdbID, Title, Poster, Type, Year, user, userRef) => {
    user.like.push({ imdbID, Title, Poster, Type, Year, })
    updateDoc(userRef, user)
  }

  const evaluateLike = (imdbID, Title, Poster, Type, Year) => {
    const user = users.find(user => user.mail === loged.mail)
    const id = user.id

    const userRef = doc(db, "users", id)

    const like = user.like.some(movie => movie.imdbID === imdbID)

    if (like) {
      return quitLike(imdbID, user, userRef)
    } else {
      return putLike(imdbID, Title, Poster, Type, Year, user, userRef)
    }
  }

  return (
    <main className='layout'>
      {movies != undefined ? movies.map(movie => <Movie key={movie.imdbID} {...movie} loged={loged} evaluateLike={evaluateLike} users={users} />) : <h2>Esa película no esta disponible. Intente con otra.</h2>}
    </main>
  )
}

export default MoviesList