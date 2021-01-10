import React from 'react';
import { FaGifts } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginGoogle } from '../../actions/auth';
import { RegisterForm } from '../../components/auth/RegisterForm';


export const RegisterScreen = () => {

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
                    <h2>Registrate</h2>
                    <RegisterForm />
                    <p> o registrate con</p>
                    <div className='auth-social' >
                        <button 
                            id='facebook'
                            onClick={handleGoogle}
                        >Google</button>
                    </div>
                    <div className='auth-link-container'>
                        <p>¿Ya tienes cuenta?</p>
                        <Link to='/auth/login' className='auth-link'>¡Ingresa!</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
