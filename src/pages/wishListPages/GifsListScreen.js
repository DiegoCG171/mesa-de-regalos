import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../../components/ui/Navbar'
import { GiftList } from '../../components/wishlist/GiftList';
import { getGiftByEvent } from '../../selector/getGiftByEvent'

export const GifsListScreen = () => {

    const dispatch = useDispatch();
    const  {tipoEvento}  = useSelector(state => state.wishList.newWishList);
    console.log(tipoEvento);
    //const giftFiltered =  getGiftByEvent(tipoEvento);

    return (
        <div className='gf'>
            <h1 className='titulo'>Crea tu Wish List</h1>
            <Navbar />
            <div className='gf-container'>
                <div className='gf-target'>
                    <div className='img'>Foto</div>
                        <div className='gf-info'>
                            {
                                // giftFiltered.map(gift => (
                                //     <GiftList 
                                //         gift={gift}
                                //     />
                                // ))
                                
                            }
                        </div>
                        <div className='gf-button'>
                            <button>Agregar</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
