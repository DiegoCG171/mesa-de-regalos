import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteWishList, startAddGiftGetted } from '../../actions/wishList';

export const GiftListSaved = ({list}) => {

    const dispatch = useDispatch();

    const handleViewGifts = () =>{
        const {gifts} = list;
        dispatch(startAddGiftGetted(gifts));
    }

    const handleEraseList = () =>{
        console.log(list.id);
        dispatch(deleteWishList(list.id));
    }

    return (
        <div>
            <div className = 'gf-target'>
            <img className='gift-photo-giftDefault' src={`./assets/img/gift.png`} alt='imgGift'/> 
                <p className='gift-name'>{list.nombre}</p>
                <p className='gift-event'>{list.tipoEvento}</p>
                <p className='gift-event'>{list.fecha}</p>
                <p className='gift-event'>{`${list.colonia} ${list.calle} ${list.cp}`}</p>
                <div className='target-buttons'>
                    <Link 
                        className='gf-addButton'
                        onClick={handleViewGifts}
                        to='/regalos'>
                        Visualizar
                    </Link>
                    <button
                        className='gf-removeButton'
                        onClick={handleEraseList}> 
                        Eliminar
                </button>
                </div>
            </div>
        </div>
    )
}
