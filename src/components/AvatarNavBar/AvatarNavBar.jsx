import React from 'react'
import './AvatarNavBar.css'

const AvatarNavBar = ({ logoutUser, loged }) => {
    const userData = loged.userData

    return (
        <>
            <div className='boxAvatar'>
                <img src={userData.img} alt={userData.name} className='avatarImg' />

                <h3 className='avatarName'>{userData.name}</h3>

            </div>

            <button className='btnSession' onClick={() => logoutUser()}>Cerrar sesión</button>
        </>
    )
}

export default AvatarNavBar