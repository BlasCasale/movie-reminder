import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer'
import { useUsers } from '../../hooks/useUsers'
import './Favorites.css'

const Favorites = () => {

  const { users, style, response } = useUsers()

  const { loged } = useContext(LoginContext)

  const user = users.find(user => user.mail === loged.mail)

  return (
    <section className='favorites'>

      <h2>Favoritos</h2>

      {user && user.like.length > 0 ? <FavoritesContainer user={user} /> : <h2 className="negative">No tienes favoritos</h2>}

      {response && <h2 className={style}>{response}</h2>}
    </section>
  )
}

export default Favorites