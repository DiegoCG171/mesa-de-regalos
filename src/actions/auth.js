import { types } from "../types/types";
import { firebase, googleProvider } from '../firestore/firebase-config'; 


export const login = (uid, displayName, photoURL) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            photoURL 
        }
    }
}

export const startLoginGoogle = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleProvider)
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName, user.photoURL));
            });

    }
}

export const startLoginWhithEmailAndPassword = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName, user.photoURL));
            });
    }
}

export const startRegisterWhithEmailAndPassword = (email, name, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({
                    displayName: name,
                })
                dispatch(login(user.uid, user.displayName, user.photoURL));
            });
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

const logout = () => ({
    type: types.logout
})