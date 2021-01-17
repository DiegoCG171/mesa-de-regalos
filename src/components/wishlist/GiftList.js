import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { startAddGift, startDeleteGift } from '../../actions/wishList';

export const GiftList = ({gift}) => { 

    const dispatch = useDispatch();
    
    const [checkAdd, setCheckAdd] = useState(false);
    const [checkErase, setCheckErase] = useState(true);


    const handleAddGift = () =>{
        setCheckAdd(true);
        setCheckErase(false);
        dispatch(startAddGift(gift));
    }

    const handleRemoveGift = () =>{
        setCheckErase(true);
        setCheckAdd(false);
        dispatch(startDeleteGift(gift));
    }

    return (
        <div>  
            <div className= 'gf-target'>     
                <img className='gift-photo' src={`./assets/img/${gift.id}.jpg`} alt='imgGift'/>
                <p className='gift-name'>{gift.nombre}</p>
                <p className='gift-event'>{gift.tipoEvento}</p>
                <div className='target-buttons'>
                    <button 
                        className={checkAdd ? 'gf-addButtonDis' : 'gf-addButton'}
                        onClick={handleAddGift}
                        disabled={checkAdd}>
                        {checkAdd ? 'Agregado' : 'Agregar'}
                    </button>
                    <button
                    className={checkErase ? 'gf-removeButtonDis' : 'gf-removeButton'}
                    disabled={checkErase}
                    onClick={handleRemoveGift}> 
                    Eliminar
                </button>
                </div>
            </div>
        </div>
    )
}
