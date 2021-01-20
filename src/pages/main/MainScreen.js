import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaGifts } from 'react-icons/fa';
import { AiFillPlusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { showGiftsByUid } from '../../actions/wishList';

export const MainScreen = () => {

    const { name } = useSelector(state => state.auth); 
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }
 
    dispatch(showGiftsByUid());

    return (
        <div className='main'>
            <div className='main-container'>
                <div className='main-logo'>
                    MR
                <FaGifts className='main-icon'/>
                </div>
                <button  
                    onClick={ handleLogout }
                    className='main-logout'>
                    Logout
                </button>
                <header className='main-header'>
                    <h1>¡Bienvenido {name} a tu Mesa de Regalos!</h1>
                </header>
                <div className='main-buttons'>
                    <Link to='/info' className='button-main'>Crear Wish List <AiFillPlusCircle className='btn-icon' /></Link>
                    <Link className='button-main' to='/mis-listas'>Ver mis Wish List's</Link> 
                </div>
            </div>
        </div>
    )
}
