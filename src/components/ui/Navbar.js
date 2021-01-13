import React from 'react'
import { Link } from 'react-router-dom'
import { FaGifts } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { useDispatch } from 'react-redux';

export const Navbar = () => {

    const {name, foto} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <nav className='navbar'>
            <div className='navbar-container'> 
                <Link className='navbar-logo' to='/'>
                    MR
                    <FaGifts className='navbar-icon'/>
                </Link>
                <ul className='navbar-info'>
                    <li className='navbar-name'>{name}</li>
                    <li className='navbar-photo'><img src={foto} alt='Foto de Perfil'/></li>
                    <li className='navbar-logout'><button onClick={handleLogout}>LogOut</button></li>
                </ul>
            </div>
        </nav>
    )
}
