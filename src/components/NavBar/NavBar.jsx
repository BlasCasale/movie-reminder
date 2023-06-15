import React from 'react'
import { useState, useContext } from 'react'
import { LoginContext } from '../../context/LoginContext.jsx'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

  const { loged, logoutUser } = useContext(LoginContext)

  const open = "open"

  const disable = "disable"

  const active = "active"

  const navOff = "nav"

  const navVisible = "navVisible"

  const [style, setStyle] = useState({ ul: disable, buttonOpen: open, buttonClose: disable, nav: navOff })

  const openUl = () => {
    setStyle({ ul: active, buttonOpen: disable, buttonClose: open, nav: navVisible })
  }

  const closeUl = () => {
    setStyle({ ul: disable, buttonOpen: open, buttonClose: disable, nav: navOff })
  }

  return (
    <header>

      <Link className='link' to={"/"}>PelisPedia</Link>

      <button className={`${style.buttonOpen} btn one`} onClick={() => openUl()}><i className="bi bi-list"></i></button>

      <nav className={style.nav}>
        <button className={`${style.buttonClose} btn two`} onClick={() => closeUl()}><i className="bi bi-list"></i></button>

        <ul className={`${style.ul} ul`}>

          <li>
            <Link className='link linkNav' to={"/"}>Inicio</Link>
          </li>

          <li>
            <Link className='link linkNav' to={"/favorites"}>Favoritos</Link>
          </li>

          {
            !loged &&
            <>
              <li>
                <Link className='link linkNav' to={"/login"}>Iniciar sesión</Link>
              </li>

              <li>
                <Link className='link linkNav' to={"/register"}>Registrarse</Link>
              </li>
            </>
          }

          {loged && <button className='btnSession' onClick={() => logoutUser()}>Cerrar sesión</button>}

        </ul>

      </nav>


    </header>
  )
}

export default NavBar