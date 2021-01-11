import React from 'react'
import { Link } from 'react-router-dom'
import { FaGifts } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export const Navbar = () => {

    const {name, foto} = useSelector(state => state.auth);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link className='navbar-logo'>
                    MR
                    <FaGifts className='navbar-icon'/>
                </Link>
                <ul className='navbar-info'>
                    <li className='navbar-name'>{name}</li>
                    <li className='navbar-photo'><img src={foto}/></li>
                    <li className='navbar-logout'><button>LogOut</button></li>
                </ul>
            </div>
        </nav>
    )
}
