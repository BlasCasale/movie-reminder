import React from 'react'
import { useState, useEffect } from 'react'
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { db } from '../../service/config'
import './Register.css'

const Register = () => {

  const [users, setUsers] = useState([])

  const [input, setInput] = useState({ name: "", surname: "", mail: "", pass: "", passCon: "" , img: ""})

  const [response, setResponse] = useState("")

  const [style, setStyle] = useState("")

  const alreadyExist = "❌ Ya existe un usuario registrado con ese mail."

  const passDoesntMatch = "❌ Las contraseñas no coinciden, intente nuevamente."

  const confirmResponse = "✔ Usuario registrado existosamente."

  const somethingGoesWrong = "❌ Algo sucedió mal, intente nuevamente."

  const negative = "negative"

  const positive = "positive"

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

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
      .catch(() => setResponse(somethingGoesWrong))
  }, [])

  const compareUser = (mail) => {
    return users.find(user => user.userData.mail == mail)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (compareUser(input.mail)) {

      setResponse(alreadyExist)
      setStyle(negative)

    } else if (input.pass.valueOf() != input.passCon.valueOf()) {

      setResponse(passDoesntMatch)
      setStyle(negative)

    } else if ((input.pass.valueOf() === input.passCon.valueOf()) && (input.name.trim() && input.surname.trim() && input.pass.trim() && input.passCon.trim() && input.mail.trim() && input.img.trim())) {
      
      setResponse(confirmResponse)

      addDoc(collection(db, "users"), {
          name: input.name,
          surname: input.surname,
          pass: input.pass,
          mail: input.mail,
          img: input.img,
          like: []
      })

      setStyle(positive)

      setInput({name: "", surname: "", pass: "", passCon: "", mail: "", img: ""})

    } else {

      setResponse(somethingGoesWrong)
      setStyle(negative)

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
        <input type="file" id="avatar" value={input.img} name="img" className='inputForm' onChange={handleInput}/>

        <button className='btnRegister' type="submit">Enviar</button>
      </form>

      {response && <p className={style}>{response}</p>}

    </>
  )
}

export default Register