import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../../service/config'
import { collection, doc, updateDoc, query, onSnapshot } from 'firebase/firestore'
import './UserInfo.css'

const UserInfo = ({ loged }) => {


    const [input, setInput] = useState({ pass: "", passChange: "", passChangeCon: "" })

    const [shown, setShown] = useState(false)

    const [response, setResponse] = useState("")

    const [users, setUsers] = useState([])

    console.log(users)

    const userData = loged.userData

    const confirmation = "✔ Su contraseña ha sido actualizada"

    const passDoesntMatch = "❌ Las contraseñas no coinciden, intente de nuevo."

    const actualPass = "❌ Ingrese nuevamente la contraseña."

    const completeFields = "❌ Complete los campos."

    useEffect(() => {
        const q = query(collection(db, "users"))

        const modify = onSnapshot(q, function (querySnapshot) {
            const docs = []
            querySnapshot.forEach(function (doc) {
                docs.push({ userData: { id: doc.id, ...doc.data() } })
            })
            setUsers(docs)
        })

        return () => {
            modify()
        }
    }, [])

    const switchShown = () => setShown(!shown)

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const changePass = (id, pass, passChange, passChangeCon) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userRef = doc(db, "users", loged.id)
        const user = users.find(user => user.userData.id === loged.id)


        if (input.passChange == input.passChangeCon && input.pass == user.userData.pass) {
            updateDoc(userRef, { userData: { pass: input.passChange } })
                .then(() => setResponse(confirmation))
                .catch(error => console.log(error))
        }
    }

    return (
        <>
            <ul className='cardUser'>
                <li>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" readOnly value={userData.name} className='inputForm' />
                </li>
                <li>
                    <label htmlFor="surname">Apellido:</label>
                    <input type="text" id='surname' readOnly value={userData.surname} className='inputForm' />
                </li>
                <li>
                    <label htmlFor="mail">Mail:</label>
                    <input type="email" name="mail" id="mail" readOnly value={userData.mail} className='inputForm' />
                </li>
                <li>
                    <label htmlFor="pass">Contraseña:</label>
                    <input type={shown ? "text" : "password"} id='pass' name='pass' className='inputForm' value={userData.pass} readOnly />
                    <button onClick={() => switchShown()} className='btnRegister'>{shown ? "Ocultar" : "Mostrar"}</button>
                </li>
            </ul>

            <form className='registerForm' onSubmit={handleSubmit}>
                <legend>Cambiar contraseña:</legend>
                <input type="password" value={input.pass} className='inputForm' name='pass' onChange={handleInput} placeholder='Contraseña actual' />
                <input type="password" value={input.passChange} className='inputForm' name='passChange' onChange={handleInput} placeholder='Nueva contraseña' />
                <input type="password" value={input.passChangeCon} className='inputForm' name="passChangeCon" onChange={handleInput} placeholder='Confirma la nueva contraseña' />
                <button type="submit">Cambiar</button>
            </form>

            {response}
        </>
    )
}

export default UserInfo