import React from 'react'
import { useSelector } from 'react-redux'
import { GiftList } from './GiftList';

export const GiftListAdd = () => {

    const {giftAdded:gifts} = useSelector(state => state.wishList);
    console.log(gifts);
    return (
        <div>
            <h1>Lista regalos agregados</h1>
            {
                gifts.map(gift => {
                    <GiftList
                        key = {gift.id} 
                        gift = {gift}
                    />
                })
            }
        </div>
    )
}
