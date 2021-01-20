import React from 'react'

export const GiftGetted = ({gift}) => {
    
    return (
        <div className='gf-target'>
            <img className='gift-photo-giftDefault' src={`./assets/img/${gift.id}.jpg`} alt='imgGift'/>
            <p className='gift-name'>{gift.nombre}</p>
            <p className='gift-event'>{gift.tipoEvento}</p>
        </div>
    )
}
