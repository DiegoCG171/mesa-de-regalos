import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removedGift } from '../../actions/wishList';

export const GiftsAdded = ({gift}) => {

    const dispatch = useDispatch();

    const {giftAdded:gifts} = useSelector(state => state.wishList);

    const [check, setCheck] = useState(false);

    const handleRemoveGift = () =>{
        setCheck(true);
        gifts.pop(gift.nombre);
    }

    return (
        <div className= { check ? 'hidden' : 'gf-target'}>
            <img className='gift-photo' src={`../../src/assets/img/${gift.id}.jpg`}/>
            <p className='gift-name'>{gift.nombre}</p>
            <p className='gift-evento'>{gift.tipoEvento}</p>
            <button
                className='gf-removeButton'
                onClick={handleRemoveGift}> 
                Quitar
            </button>
        </div>
    )
}
