import axios from "axios"

const apiKey = `dc2ddbc3`

export const getMovies = (input) => {
    return axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${input}`)
        .then(data => {
            const movieArray = data.data.Search
            return movieArray
        })
}
