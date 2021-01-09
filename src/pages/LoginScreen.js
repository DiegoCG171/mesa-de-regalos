import React from 'react';
import { FaGifts } from 'react-icons/fa';
import { LoginForm } from '../components/LoginForm';

export const LoginScreen = () => {
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
                        <button id='facebook'>Facebook</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
