import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { WishListRouter } from './WishListRouter';
import { firebase } from '../firestore/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';


export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        firebase.auth().onAuthStateChanged((user) =>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName, user.photoURL));
            }
        });
    }, [dispatch]);

    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/auth' component={AuthRouter} />
                    <Route path='/' component={WishListRouter}/>
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    )
}
