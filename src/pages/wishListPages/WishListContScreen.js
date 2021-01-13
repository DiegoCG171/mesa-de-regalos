import React from 'react'
import { Navbar } from '../../components/ui/Navbar'
import { Sidebar } from '../../components/ui/Sidebar'
import { WishListContForm } from '../../components/wishlist/WishListContForm'

export const WishListContScreen = () => {
    return (
        <div className='ws'>
            <div className='ws-container'> 
                <Navbar />
                <WishListContForm />
                <Sidebar />
            </div>
        </div>
    )
}
