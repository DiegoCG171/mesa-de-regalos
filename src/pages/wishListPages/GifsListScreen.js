import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegisterFinalWishList } from '../../actions/wishList';
import { Navbar } from '../../components/ui/Navbar'
import { GiftList } from '../../components/wishlist/GiftList';
import { getGiftByEvent } from '../../selector/getGiftByEvent'

export const GifsListScreen = () => {

    const dispatch = useDispatch();

    const [check, setCheck] = useState(false);

    const { newWishListInfo } = useSelector(state => state.wishList);
    const { tipoEvento } = newWishListInfo;

    const giftFiltered = getGiftByEvent(tipoEvento);
    
    const handleSubmit = (ev) =>{
        ev.preventDefault();
        setCheck(true);
        dispatch(startRegisterFinalWishList());
    }

    return (
        <div className='gf'>
            <h1 className='titulo'>CREA TU WISH LIST</h1>
            <Navbar />
            <div className='gf-container'>
                <div className='gf-info'>
                    <h2 className='titulo-gf-info'>Elige los regalos que te agraden</h2>
                    {
                        giftFiltered.map(gift => (
                            <GiftList
                                key={gift.id}
                                gift={gift}
                            />
                        ))

                    }
                </div>
                <div className='gf-button'>
                    <button 
                        className={check ? 'gf-buttonSaveDis' : 'gf-buttonSave'}
                        onClick={handleSubmit}
                        disabled={check}
                    >Guardar</button>
                    <Link to='/' className='gf-buttonEnd'>Finalizar</Link>
                </div>
            </div>
        </div>
    )
}
