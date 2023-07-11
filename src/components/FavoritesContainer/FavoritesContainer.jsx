import React from 'react'
import '../MovieList/MovieList.css'
import FavoritesCard from '../FavoritesCard/FavoritesCard'

const FavoritesContainer = ({ user }) => {
    return (
        <div className='layout'>
            {user.like.map(movie => <FavoritesCard key={movie.imdbID} {...movie} />)}
        </div>
    )
}

export default FavoritesContainer