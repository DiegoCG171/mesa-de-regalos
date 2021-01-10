import React from 'react'
import { useSelector } from 'react-redux'
import { FaGifts } from 'react-icons/fa';
import { AiFillPlusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';

export const MainScreen = () => {

    const { name } = useSelector(state => state.auth)

    return (
        <div className='main'>
            <div className='main-container'>
                <div className='main-logo'>
                    MR
                <FaGifts className='main-icon'/>
                </div>
                <header className='main-header'>
                    <h1>¡Bienvenido {name} a tu Mesa de Regalos!</h1>
                </header>
                <div className='main-buttons'>
                    <Link to='/' className='button-main'>Crear Wish List <AiFillPlusCircle className='btn-icon' /></Link>
                    <Link to='/' className='button-main'>Ver mis Wish List's</Link> 
                </div>
            </div>
        </div>
    )
}
