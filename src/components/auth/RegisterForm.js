import React from 'react'

export const RegisterForm = () => {
    return (
        <form className='form'>
            <input className='form-input' placeholder='Nombre' />
            <input className='form-input' placeholder='Email' />
            <input className='form-input' placeholder='Password' />
            <button>Registrar</button>
        </form>
    )
}
