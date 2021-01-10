import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainScreen } from '../pages/main/MainScreen'

export const WishListRouter = () => {
    return (
        <Switch>
            <Route path='/' component={MainScreen}/>
        </Switch>
    )
}

