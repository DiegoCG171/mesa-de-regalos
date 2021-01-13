import React from 'react'
import { Link } from 'react-router-dom'

export const WishListContForm = () => {
    return (
        <div className='wsf-container'>
            <form className='wsf-form'>
                <div className='wsf-form-contacto'> 
                    <h2 className='titulo'>Información de contacto y envío</h2>
                    <label>Calle</label>
                    <input
                        className='form-input'
                        name='calle'
                        type='text'
                    />
                    <label>Colonia</label>
                    <input
                        className='form-input'
                        name='colonia'
                        type='text'
                    />
                    <div className='input-small'>
                        <label>Código Postal</label>
                        <input
                            className='form-input-small'
                            name='cp'
                            type='text'
                        />
                        <label className='label-fon'>Télefono</label>
                        <input
                            className='form-input-small'
                            name='telefono'
                            type='text'
                        />
                    </div>
                    <div className='input-small-number'>
                        <label># Interior</label>
                        <input
                            className='form-input-small'
                            name='num-interior'
                            type='text'
                        />
                        <label># Exterior</label>
                        <input
                            className='form-input-small'
                            name='num-exterior'
                            type='text'
                        />
                    </div>
                    <button
                        type='submit'
                    //onClick={}
                    >
                    Guardar
                    </button>
                    <Link to='/info' className='button-back'> Atras </Link>
                </div>
            </form>
        </div>
    )
}
