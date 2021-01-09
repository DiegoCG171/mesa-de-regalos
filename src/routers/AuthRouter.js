import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../pages/LoginScreen'
import { RegisterScreen } from '../pages/RegisterScreen'

export const AuthRouter = () => {
    return (
        <Switch>
            <Route exact path='/auth/login' component={ LoginScreen } />
            <Route exact path='/auth/register' component={ RegisterScreen } />
            <Redirect to='/auth/login' />
        </Switch>
    )
}
