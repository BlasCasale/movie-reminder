import React from 'react'
import { useState } from 'react'
import '../MovieList/MovieList.css'
import './FavoritesContainer.css'
import FavoritesCard from '../FavoritesCard/FavoritesCard'
// import { orderArray } from '../../service/orderFunction'

const FavoritesContainer = ({ user }) => {

    const like = user.like

    const [likeMovies, setLikeMovies] = useState(() => {
        if (like) return [...like]
        else return []
    })

    const duplicatedMovies = [...like]

    const orderArray = () => {
        duplicatedMovies.sort((a, b) => (a.Title > b.Title ? 1 : a.Title < b.Title ? -1 : 0))

        return setLikeMovies(duplicatedMovies)
    }

    return (
        <div className='favoritesBox'>

            <button onClick={() => orderArray()} className='btnSession btnOrder'>Ordenar</button>

            <div className='layout'>

                {likeMovies.map(movie => <FavoritesCard key={movie.imdbID} {...movie} />)}

            </div>

        </div>
    )
}

export default FavoritesContainer