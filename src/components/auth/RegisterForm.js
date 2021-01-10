import React from 'react'
import { useDispatch } from 'react-redux';
import { startRegisterWhithEmailAndPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'

export const RegisterForm = () => {

    const dispatch = useDispatch();

    const [{name, email, password}, handleInputChange] = useForm({ 
        name:'',
        email:'',
        password:''
    });

    const handleSubmitForm = (ev) =>{
        ev.preventDefault();
        dispatch(startRegisterWhithEmailAndPassword(email, name, password));
    }


    return (
        <form className='form'>
            <input 
                className='form-input' 
                placeholder='Nombre' 
                name='name'
                value={name}
                onChange={handleInputChange}/>
            <input 
                className='form-input' 
                placeholder='Email' 
                name='email'
                value={email}
                onChange={handleInputChange}/>
            <input 
                className='form-input' 
                placeholder='Password' 
                name='password'
                value={password}
                onChange={handleInputChange}/>
            <button
                type='submit'
                onClick={handleSubmitForm}
            >Registrar</button>
        </form>
    )
}
