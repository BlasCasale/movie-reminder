import React from 'react'
import Movie from '../Movie/Movie'
import './MovieList.css'
import { LoginContext } from '../../context/LoginContext.jsx'
import { useContext, useState, useEffect } from 'react'
import { db } from '../../service/config'
import { collection, doc, updateDoc, query, onSnapshot } from 'firebase/firestore'

const MoviesList = ({ movies }) => {

  const [users, setUsers] = useState([])

  const { loged } = useContext(LoginContext)

  useEffect(() => {
    const q = query(collection(db, "users"))

    const modify = onSnapshot(q, function (querySnapshot) {
      const docs = []
      querySnapshot.forEach(function (doc) {
        docs.push({ id: doc.id, ...doc.data() })
      })
      setUsers(docs)
    })

    return () => {
      modify()
    }
  }, [])

  const putStyle = (imdbID) => {
    const findMovie = loged.like.find(movie => movie.imdbID === imdbID)

    if (findMovie) {
      return "red"
    } else {
      return "black"
    }
  }

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

  const putLike = (imdbID, Title, user, userRef) => {
    user.like.push({ imdbID, Title })
    updateDoc(userRef, user)
  }

  const evaluateLike = (imdbID, Title) => {
    const user = users.find(user => user.mail === loged.mail)
    const id = user.id

    const userRef = doc(db, "users", id)

    const like = user.like.some(movie => movie.imdbID === imdbID)

    if (like) {
      return quitLike(imdbID, user, userRef)
    } else {
      return putLike(imdbID, Title, user, userRef)
    }
  }

  return (
    <main className='layout'>
      {movies != undefined ? movies.map(item => <Movie key={item.imdbID} {...item} loged={loged} evaluateLike={evaluateLike} putStyle={putStyle} />) : <h2>Esa película no esta disponible. Intente con otra.</h2>}
    </main>
  )
}

export default MoviesList