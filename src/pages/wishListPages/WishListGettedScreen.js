import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/ui/Navbar'
import { GiftGetted } from '../../components/wishlist/GiftGetted';

export const WishListGettedScreen = () => {

    const {wishListGetted:gifts} = useSelector(state => state.wishList);

    return (
        <div className='gf'>
            <h1 className='titulo'> REGALOS QUE ELEGISTE PARA TU WISH LIST</h1>
            <div className='gf-container'>
                <Navbar />
                <div className='gf-info'>
                    <h2 className='titulo-gf-info'>Regalos de la Wish List</h2>
                    {
                        gifts.map(gift => (
                            <GiftGetted
                                key={gift.id}
                                gift={gift} 
                            />
                        ))
                    } 
                </div>
                <div className='gf-button'>
                    <Link className='gf-buttonSave' to='/mis-listas'>Hecho</Link>
                </div>
            </div>   
        </div>
    )
}
