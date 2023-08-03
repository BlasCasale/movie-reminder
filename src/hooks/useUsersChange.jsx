import { useState, useEffect } from "react"
import { query, onSnapshot, collection } from "firebase/firestore"
import { db } from "../service/config"

export const useUsersChange = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const q = query(collection(db, "users"))

        const modify = onSnapshot(q, function (querySnapshot) {
            const docs = []
            querySnapshot.forEach(function (doc) {
                docs.push({ id: doc.id, ...doc.data() })
            })
            return setUsers(docs)
        })

        return () => {
            modify()
        }
    }, [])

    return { users }
}