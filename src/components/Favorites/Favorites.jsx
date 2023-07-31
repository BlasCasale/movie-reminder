import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../service/config'
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer'
import './Favorites.css'

const Favorites = () => {

  const [users, setUsers] = useState([])

  const [response, setResponse] = useState("")

  const [style, setStyle] = useState("")

  const { loged } = useContext(LoginContext)

  const somethingGoesWrong = "❌ Algo sucedió mal, intente nuevamente."

  const negative = "negative"

  useEffect(() => {
    const myUsers = collection(db, "users")

    getDocs(myUsers)
      .then(user => {
        const newUser = user.docs.map(client => {
          const data = client.data()
          return { ...data }
        })
        setUsers(newUser)
      })
      .catch(() => {
        setResponse(somethingGoesWrong)
        setStyle(negative)
      })
  }, [])

  const user = users.find(user => user.mail === loged.mail)

  return (
    <section className='favorites'>

      <h2>Favoritos</h2>

      {user && user.like.length > 0 ? <FavoritesContainer user={user} /> : <h2 className={negative}>No tienes favoritos</h2>}

      {response && <h2 className={style}>{response}</h2>}
    </section>
  )
}

export default Favorites