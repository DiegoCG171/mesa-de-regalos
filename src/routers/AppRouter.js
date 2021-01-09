import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/auth' component={AuthRouter} />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    )
}
