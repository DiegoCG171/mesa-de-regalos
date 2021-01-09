import React from 'react';
import { FaGifts } from 'react-icons/fa';
import { RegisterForm } from '../../components/auth/RegisterForm';


export const RegisterScreen = () => {
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
                        <button id='facebook'>Facebook</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
