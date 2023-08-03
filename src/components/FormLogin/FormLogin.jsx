import React from 'react'
import { useState } from 'react'
import { useUsers } from '../../hooks/useUsers'

const FormLogin = ({ loginUser }) => {

    const [input, setInput] = useState({ mail: "", pass: "" })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const [error, setError] = useState("")

    const denied = "❌ El mail y la contraseña no coinciden, intente nuevamente."

    const completeFields = "❌ Por favor complete todos los campos."

    const negative = "negative"

    const { style, users, response } = useUsers()

    const findUser = (mail, pass) => {
        return users.find((user) => user.mail == mail && user.pass == pass)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (findUser(input.mail, input.pass)) {
            loginUser(findUser(input.mail, input.pass))
        } else if (!input.mail || !input.pass) {
            setError(completeFields)
            setStyle(negative)
        } else {
            setError(denied)
            setStyle(negative)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='registerForm'>
                <legend>Inicia sesión:</legend>
                <input type="email" name="mail" placeholder='Ingresa tu mail' value={input.mail} onChange={handleInput} className='inputForm' />
                <input type="password" name="pass" placeholder='Ingresa tu contraseña' value={input.pass} onChange={handleInput} className='inputForm' />
                <button type="submit" className='btnRegister'>Enviar</button>
            </form>

            <p className={style}>{error}</p>

            <p className={style}>{response}</p>
        </>
    )
}

export default FormLogin