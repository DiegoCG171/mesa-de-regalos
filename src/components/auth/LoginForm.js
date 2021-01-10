import React from 'react'
import { useDispatch } from 'react-redux';
import { login, startLoginWhithEmailAndPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginForm = () => {

    const dispatch = useDispatch();
    const [ { email, password }, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('form')
        dispatch(startLoginWhithEmailAndPassword(email, password));
    }

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
            <button
                type='submit'
                onClick={handleSubmit}
            >
                Login
            </button>
        </form>

    )
}
