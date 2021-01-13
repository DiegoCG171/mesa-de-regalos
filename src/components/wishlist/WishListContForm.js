import React from 'react'
import { Link } from 'react-router-dom'
import { registarWishList } from '../../actions/wishList';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';

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
                        // value={calle}
                        // onChange={handleInputChange}
                    />
                    <label>Colonia</label>
                    <input
                        className='form-input'
                        name='colonia'
                        type='text'
                        // value={colonia}
                        // onChange={handleInputChange}
                    />
                    <div className='input-small'>
                        <label>Código Postal</label>
                        <input
                            className='form-input-small'
                            name='cp'
                            type='text'
                            // value={cp}
                            // onChange={handleInputChange}
                        />
                        <label className='label-fon'>Télefono</label>
                        <input
                            className='form-input-small'
                            name='telefono'
                            type='text'
                            // value={telefono}
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className='input-small-number'>
                        <label># Interior</label>
                        <input
                            className='form-input-small'
                            name='num-interior'
                            type='text'
                            // value={interior}
                            // onChange={handleInputChange}
                        />
                        <label># Exterior</label>
                        <input
                            className='form-input-small'
                            name='num-exterior'
                            type='text'
                            // value={exterior}
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className='botones'>
                        <Link to='/info' className='button'>Guardar</Link>
                        <button className='button-back'
                            type='submit'
                            //onClick={}
                        >
                            Atras
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
