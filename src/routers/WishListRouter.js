import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { MainScreen } from '../pages/main/MainScreen'
import { GifsListScreen } from '../pages/wishListPages/GifsListScreen'
import { MyWishListScreen } from '../pages/wishListPages/MyWishListScreen'
import { WishListScreen } from '../pages/wishListPages/WishListScreen'

export const WishListRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={MainScreen}/>
            <Route exact path='/info' component={WishListScreen}/>
            <Route exact path='/lista-regalos' component={GifsListScreen}/>
            <Route exact path='/mis-listas'component={MyWishListScreen} />
            <Redirect to='/' />
        </Switch>
    )
}

