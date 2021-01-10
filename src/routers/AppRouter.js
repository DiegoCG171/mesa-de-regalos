import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { WishListRouter } from './WishListRouter';
import { firebase } from '../firestore/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoadingScreen } from '../pages/ui/LoadingScreen';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() =>{
        firebase.auth().onAuthStateChanged((user) =>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName, user.photoURL));
                setChecking(false);
                setisLoggedIn(true);
            } else {
                setisLoggedIn(false);
                setChecking(false);
            }

        });
    }, [dispatch, setisLoggedIn]);

    if(checking){
        return <LoadingScreen />
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        
                        isAuthenticated={isLoggedIn}
                        path='/auth' 
                        component={AuthRouter} />
                    <PrivateRoute
                        
                        isAuthenticated={isLoggedIn}
                        path='/' 
                        component={WishListRouter}
                        />
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    )
}
