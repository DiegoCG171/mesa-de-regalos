import React from 'react'
import { Link } from 'react-router-dom'

export const WishListInfoForm = () => {
    return (
        <div className='wsf-container'>
            <form className='wsf-form'>
                <div className='wsf-form-evento'>
                    <h2 className='titulo'>Información del Evento</h2>
                    <label>Nombra tu Wish List:</label>
                    <input
                        className='form-input'
                        name='name'
                        type='text'
                    />

                    <label>Tipo de Evento:</label>
                    <select
                        className='form-input'
                        name='type-event'
                    >
                        <option value='boda'>Boda</option>
                        <option value='xvanios'>XV Años</option>
                        <option value='bautizo'>Bautizo</option>
                        <option value='infantil'>Infantil</option>
                        <option value='paraEl'>Para Él</option>
                        <option value='paraElla'>Para Ella</option>
                    </select>

                    <label>Fecha del Evento: </label>
                    <input
                        className='form-input'
                        name='date-event'
                        type='date'
                    />
                    <Link to='/contacto' className='button'>Siguiente</Link>
                    
                    <button className='button-back'
                        type='submit'
                        //onClick={}
                    >
                        Atras
                    </button>
                </div>
            </form>
        </div>
    )
}
