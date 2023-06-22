import React from 'react'
import './AvatarNavBar.css'

const AvatarNavBar = ({ logoutUser, loged }) => {

    return (
        <>
            <div className='boxAvatar'>
                <img src={loged.img} alt={loged.name} className='avatarImg' />

                <h3 className='avatarName'>{loged.name}</h3>

            </div>

            <button className='btnSession' onClick={() => logoutUser()}>Cerrar sesión</button>
        </>
    )
}

export default AvatarNavBar