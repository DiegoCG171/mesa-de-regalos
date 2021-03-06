import React from 'react'; 
import { FaGifts } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginGoogle } from '../../actions/auth';
import { LoginForm } from '../../components/auth/LoginForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const handleGoogle = () => {
        dispatch( startLoginGoogle() );
    }

    return (
        <main className='auth'>
            <div className='auth-container'>
                <div className='auth-logo'>
                    MR
                    <FaGifts className='auth-icon' />
                </div>
                <div className='auth-box'>
                    <h2>Iniciar Sesión</h2>
                    <LoginForm />
                    <p>o inicia sesión</p>
                    <div className='auth-social' >
                        <button 
                        onClick={ handleGoogle }
                        id='facebook'>Google</button>
                    </div>
                    <div className='auth-link-container'>
                        <p>¿No tienes cuenta?</p>
                        <Link to='/auth/register' className='auth-link'>¡Registrate!</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
