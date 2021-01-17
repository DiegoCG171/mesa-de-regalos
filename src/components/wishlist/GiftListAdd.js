import React from 'react'
import { useSelector } from 'react-redux'
import { GiftsAdded } from './GiftsAdded';

export const GiftListAdd = () => {

    const {giftAdded:gifts} = useSelector(state => state.wishList);
    return (
        <div className='gf-added'>
            <h1 className='title-gf-added'>Lista regalos agregados</h1>
            {
                gifts.map(gift => {
                    return (
                    <GiftsAdded
                        key = {gift.id} 
                        gift = {gift} 
                    />)
                })
            }
            
        </div>
    )
}
