import React from 'react'

export const WishListForm = () => {
    return (
        <div className='wsf-container'>
            <form className='wsf-form'>
                <div className='wsf-form__evento'>
                    <h2>Información del Evento</h2>
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
                            <option value='infantil'>infantil</option>
                            <option value='paraEl'>Para Él</option>
                            <option value='paraElla'>Para Ella</option>
                        </select>

                        <label>Fecha del Evento</label>
                        <input 
                            className='form-input'
                            name='date-event'
                            type='date'
                        />
                </div>

                <div className='wsf-form__contacto'>
                        <h2>Información de contacto y envío</h2>
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
                        <label>Código Postal</label>
                        <input 
                            className='form-input'
                            name='cp'
                            type='text'
                        />
                        <label>Télefono</label>
                        <input 
                            className='form-input'
                            name='telefono'
                            type='text'
                        />
                        <label># Interior</label>
                        <input 
                            className='form-input'
                            name='num-interior'
                            type='text'
                        />
                        <label># Exterior</label>
                        <input 
                            className='form-input'
                            name='num-exterior'
                            type='text'
                        />
                        <button 
                            type='submit'
                            //onClick={}
                        >
                        Guardar
                        </button>
                </div>
            </form>
        </div>
    )
}
