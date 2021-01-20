import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/ui/Navbar'
import { GiftListSaved } from '../../components/wishlist/GiftListSaved';

export const MyWishListScreen = () => {

    const {wishListFirebase:listData}= useSelector(state => state.wishList);
    const {lists} = listData;

    return (
        <div className='gf'>
            <h1 className='titulo'>MIS WISH LIST</h1>
            <Navbar />
            <div className='gf-container'>
                <div className='gf-info'>
                    <h2 className='titulo-gf-info'>Listas creadas</h2>
                    {
                        lists.map(list => (
                            <GiftListSaved 
                                key={list.id}
                                list={list}/>
                        ))
                    }
                </div>
                <div className='gf-button'>
                    <Link className='gf-buttonSave' to='/'>Regresar</Link>
                </div>
            </div>
        </div>
    )
}
