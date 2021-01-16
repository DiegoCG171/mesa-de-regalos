import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../../components/ui/Navbar'
import { GiftList } from '../../components/wishlist/GiftList';
import { GiftListAdd } from '../../components/wishlist/GiftListAdd';
import { getGiftByEvent } from '../../selector/getGiftByEvent'

export const GifsListScreen = () => {

    const dispatch = useDispatch();
    const { newWishListInfo } = useSelector(state => state.wishList);

    const { tipoEvento } = newWishListInfo;

    console.log(tipoEvento);
    const giftFiltered = getGiftByEvent(tipoEvento);

    return (
        <div className='gf'>
            <h1 className='titulo'>Crea tu Wish List</h1>
            <Navbar />
            <div className='gf-container'>
                <div className='gf-info'>
                    {
                        giftFiltered.map(gift => (
                            <GiftList
                                key={gift.id}
                                gift={gift}
                            />
                        ))

                    }
                </div>
                <div className='gf-added'>
                    <GiftListAdd />
                </div>
            </div>
        </div>
    )
}
