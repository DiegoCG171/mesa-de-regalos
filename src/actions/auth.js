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
