import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { registarWishList } from '../../actions/wishList';
import { useForm } from '../../hooks/useForm';


export const WishListInfoForm = ({history}) => {
    console.log(history);

    const [Button, setButton] = useState(false);

    const dispatch = useDispatch();
    const [{nombre, tipoEvento, fecha, calle, colonia, cp, telefono, interior, exterior}, handleInputChange] = useForm({
        nombre:'',
        tipoEvento:'',
        fecha:'',
        calle:'',
        colonia:'', 
        cp:'',
        telefono:'',
        interior:'',
        exterior:''
    })

    const handleSubmit = (ev) =>{
        ev.preventDefault();
        const InfoWishList = {nombre, tipoEvento, fecha, calle, colonia, cp, telefono, interior, exterior} 
        dispatch(registarWishList(InfoWishList));
        Swal.fire("Guardado", "La información ha sido guardada de forma correcta", 'success');
        setButton(true);
    }

    return (
        <div className='wsf-container'>
            <form className='wsf-form'>
                <div className='wsf-form-evento'>
                    <h2 className='titulo'>Información del Evento</h2>
                    <label>Nombra tu Wish List:</label>
                    <input
                        className='form-input'
                        name='nombre'
                        type='text'
                        value={nombre}
                        onChange={handleInputChange}
                    />

                    <label>Tipo de Evento:</label>
                    <select 
                        className='form-input'
                        name='tipoEvento'
                        value={tipoEvento}
                        onChange={handleInputChange}
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
                        name='fecha'
                        type='date'
                        value={fecha}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='wsf-form-contacto'> 
                    <h2 className='titulo'>Información de contacto y envío</h2>
                    <label>Calle</label>
                    <input
                        className='form-input'
                        name='calle'
                        type='text'
                        value={calle}
                        onChange={handleInputChange}
                    />
                    <label>Colonia</label>
                    <input
                        className='form-input'
                        name='colonia'
                        type='text'
                        value={colonia}
                        onChange={handleInputChange}
                    />
                    <div className='input-small'>
                        <label>Código Postal</label>
                        <input
                            className='form-input-small'
                            name='cp'
                            type='text'
                            value={cp}
                            onChange={handleInputChange}
                        />
                        <label className='label-fon'>Télefono</label>
                        <input
                            className='form-input-small'
                            name='telefono'
                            type='text'
                            value={telefono}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='input-small-number'>
                        <label># Interior</label>
                        <input
                            className='form-input-small'
                            name= 'interior'
                            type='text'
                            value={interior}
                            onChange={handleInputChange}
                        />
                        <label># Exterior</label>
                        <input
                            className='form-input-small'
                            name='exterior'
                            type='text'
                            value={exterior}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button 
                        className={Button ? 'button-success button' : 'button'} 
                        onClick={handleSubmit}
                        disabled={Button}>
                        {Button ? 'Guardado' : 'Guardar'}
                    </button>
                    <Link 
                        to={Button ? '/lista-regalos' : '#'}
                        className={Button ? 'button-next button' : 'button'}
                    >Siguiente</Link>
                </div>
            </form>
        </div>
    )
}
