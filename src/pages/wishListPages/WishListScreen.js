import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from '../../components/ui/Navbar'
import { Sidebar } from '../../components/ui/Sidebar'
import { WishListInfoForm} from '../../components/wishlist/WishListInfoForm'

export const WishListScreen = ({history}) => {

    const ws = useSelector(state => state.wishList)
    if(ws !== null){
        history.replace('/');
    }

    return (
        <div className='ws'>
            <div className='ws-container'>
            <Navbar />
            <WishListInfoForm />
            <Sidebar />
            </div>  
        </div>
    )
}
