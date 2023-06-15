import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import FormLogin from '../FormLogin/FormLogin'

const Login = () => {

  const { loged, loginUser } = useContext(LoginContext)

  return (
    <>
      {loged ? <></> : <FormLogin loginUser={loginUser} />}
    </>
  )
}

export default Login