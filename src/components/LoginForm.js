import React from 'react'
import { useForm } from '../hooks/useForm'

export const LoginForm = () => {

    const [ { email, password }, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    return (
        <form className='form'>
            <input 
                className='form-input' 
                placeholder='Email' 
                name='email'
                type='email'
                value={email}
                onChange={handleInputChange}
                />
            <input 
                className='form-input' 
                placeholder='Password'
                name='password'
                type='password'
                value={password}
                onChange={handleInputChange} 
                />
            <button>Login</button>
        </form>

    )
}
