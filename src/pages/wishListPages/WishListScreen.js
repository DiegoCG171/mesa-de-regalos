import React from 'react'
import { Navbar } from '../../components/ui/Navbar'
import { Sidebar } from '../../components/ui/Sidebar'
import { WishListForm } from '../../components/wishlist/WishListForm'

export const WishListScreen = () => {
    return (
        <div className='ws'>
            <div className='ws-container'>
                {/* <Navbar /> */}
                <WishListForm />
                <Sidebar />
            </div>
        </div>
    )
}
