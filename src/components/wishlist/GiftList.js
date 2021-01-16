import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { startAddGift } from '../../actions/wishList';

export const GiftList = ({gift}) => {

    const dispatch = useDispatch();
    
    const [check, setCheck] = useState(false);

    const handleAddGift = () =>{
        setCheck(true);
        dispatch(startAddGift(gift));
    }

    return (
        <div className='GiftList'>
            <div className= 'gf-target'>
                <img />
                <p>{gift.nombre}</p>
                <p>{gift.tipoEvento}</p>
                <button 
                    onClick={handleAddGift}>
                    Agregar
                </button>
            </div>
        </div>
    )
}
