import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { startAddGift } from '../../actions/wishList';

export const GiftList = ({gift, giftFiltered}) => { 

    const dispatch = useDispatch();
    
    const [check, setCheck] = useState(false);

    console.log(giftFiltered);

    const handleAddGift = () =>{
        setCheck(true);
        dispatch(startAddGift(gift));
    }

    return (
        <div>  
            <div className= 'gf-target'>     
                <img className='gift-photo' src={`../../src/assets/img/${gift.id}.jpg`}/>
                <p className='gift-name'>{gift.nombre}</p>
                <p className='gift-event'>{gift.tipoEvento}</p>
                <button 
                    className={check ? 'gf-addButtonDis' : 'gf-addButton'}
                    onClick={handleAddGift}
                    disabled={check}>
                    {check ? 'Agregado' : 'Agregar'}
                </button>
            </div>
        </div>
    )
}
