import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Navbar } from '../../components/ui/Navbar'
import { GiftList } from '../../components/wishlist/GiftList';
import { getGiftByEvent } from '../../selector/getGiftByEvent'

export const GifsListScreen = () => {


    const { newWishListInfo } = useSelector(state => state.wishList);
    const { tipoEvento } = newWishListInfo;
    const {giftAdded:gifts} = useSelector(state => state.wishList);

    const giftFiltered = getGiftByEvent(tipoEvento);
    
    const handleSubmit = (ev) =>{
        ev.preventDefault();
        const WishListFinal = {newWishListInfo, gifts};
        console.log('ListaFinal:')
        console.log(WishListFinal); 
        Swal.fire("¡Registrada!", `La Wish List ${newWishListInfo.nombre} ha sido registrada correctamente`, 'success');
    }

    return (
        <div className='gf'>
            <h1 className='titulo'>Crea tu Wish List</h1>
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
                    <button className='gf-buttonSave'
                        onClick={handleSubmit}
                    >Guardar</button>
                    <Link to='/' className='gf-buttonEnd'>Finalizar</Link>
                </div>
            </div>
        </div>
    )
}
