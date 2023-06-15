import React from 'react'
import { useState, useEffect } from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../../service/config'

const FormLogin = ({loginUser}) => {

    const [input, setInput] = useState({mail: "", pass: ""})

    const [users, setUsers] = useState([])

    const [style, setStyle] = useState("")

    const [response, setResponse] = useState("")

    const error404 = "❌ No se ha podido recuperar la informacion"

    const denied = "❌ El mail y la contraseña no coinciden, intente nuevamente."

    const completeFields = "❌ Por favor complete todos los campos."

    const negative = "negative"

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const findUser = (mail, pass) => {
        return users.find((user) => user.userData.mail == mail && user.userData.pass == pass)
    }

    useEffect(() => {
        const myUsers = collection(db, "users")

        getDocs(myUsers)
        .then(user => {
            const newUser = user.docs.map(client => {
                const data = client.data()
                return {...data}
            })
            setUsers(newUser)
        })
        .catch(error => {
            setResponse(error404)
            setStyle(negative)
        })
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (findUser(input.mail, input.pass)) {
            loginUser(input.mail)
        } else if (!input.mail || !input.pass) {
            setResponse(completeFields)
            setStyle(negative)
        } else {
            setResponse(denied)
            setStyle(negative)
        }
    }

  return (
    <>

    <form onSubmit={handleSubmit}>
        <legend>Inicia sesión:</legend>
        <input type="email" name="mail" placeholder='Ingresa tu mail' value={input.mail} onChange={handleInput} className='inputForm'/>
        <input type="password" name="pass" placeholder='Ingresa tu contraseña' value={input.pass} onChange={handleInput} className='inputForm'/>
        <button type="submit">Enviar</button>
    </form>
    
    {response && <p className={style}>{response}</p>}
    </>
  )
}

export default FormLogin