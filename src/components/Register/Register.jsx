import React from 'react'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../service/config'
import './Register.css'
import { useUsers } from '../../hooks/useUsers'
import { positive, negative, alreadyExist, passDoesntMatch, confirmResponse } from '../../utils/consts'

const Register = () => {

  const { users, style, response } = useUsers()

  const [input, setInput] = useState({ name: "", surname: "", mail: "", pass: "", passCon: "", img: "" })

  const [res, setRes] = useState("")

  const [styleComponent, setStyleComponent] = useState("")

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const compareUser = (mail) => {
    return users.find(user => user.userData.mail == mail)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (compareUser(input.mail)) {

      setRes(alreadyExist)
      setStyleComponent(negative)

    } else if (input.pass.valueOf() != input.passCon.valueOf()) {

      setRes(passDoesntMatch)
      setStyleComponent(negative)

    } else if ((input.pass.valueOf() === input.passCon.valueOf()) && (input.name.trim() && input.surname.trim() && input.pass.trim() && input.passCon.trim() && input.mail.trim() && input.img.trim())) {

      setRes(confirmResponse)

      addDoc(collection(db, "users"), {
        name: input.name,
        surname: input.surname,
        pass: input.pass,
        mail: input.mail,
        img: input.img,
        like: []
      })

      setStyleComponent(positive)

      setInput({ name: "", surname: "", pass: "", passCon: "", mail: "", img: "" })

    } else {

      setRes(response)
      setStyleComponent(negative)

    }
  }

  return (
    <>

      <form onSubmit={handleSubmit} className='registerForm'>
        <legend>Registrate:</legend>
        <input type="text" placeholder='Nombre' value={input.name} name='name' onChange={handleInput} className='inputForm' />
        <input type="text" placeholder='Apellido' value={input.surname} name='surname' onChange={handleInput} className='inputForm' />
        <input type="email" placeholder="Mail" value={input.mail} name="mail" onChange={handleInput} className='inputForm' />
        <input type="password" placeholder='Contraseña' value={input.pass} name="pass" onChange={handleInput} className='inputForm' />
        <input type="password" placeholder='Repeti contraseña' value={input.passCon} name="passCon" onChange={handleInput} className='inputForm' />
        <label htmlFor="avatar">Foto de perfil:</label>
        <input type="file" id="avatar" value={input.img} name="img" className='inputForm' onChange={handleInput} />

        <button className='btnRegister' type="submit">Enviar</button>
      </form>

      <p className={styleComponent}>{res}</p>

      <p className={style}>{response}</p>

    </>
  )
}

export default Register