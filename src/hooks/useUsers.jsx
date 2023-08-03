import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../service/config'
import { negative } from '../utils/consts'

export const useUsers = () => {
    const [users, setUsers] = useState([])

    const [style, setStyle] = useState("")

    const [response, setResponse] = useState("")

    const error404 = "❌ No se ha podido recuperar la informacion"

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
                setResponse(error404)
                setStyle(negative)
            })
    })

    return { users, style, response }
}