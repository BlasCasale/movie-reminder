import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import FormLogin from '../FormLogin/FormLogin'
import UserInfo from '../UserInfo/UserInfo'

const Login = () => {

  const { loged, loginUser } = useContext(LoginContext)

  return (
    <>
      {loged ? <UserInfo loged={loged} /> : <FormLogin loginUser={loginUser} />}
    </>
  )
}

export default Login