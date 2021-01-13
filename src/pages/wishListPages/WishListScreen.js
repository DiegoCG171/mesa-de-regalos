import React from 'react'
import { Navbar } from '../../components/ui/Navbar'
import { Sidebar } from '../../components/ui/Sidebar'
import { WishListInfoForm} from '../../components/wishlist/WishListInfoForm'

export const WishListScreen = () => {
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
