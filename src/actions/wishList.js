import { types } from "../types/types";
import { firebase, googleProvider } from '../firestore/firebase-config';

export const registarWishList = (InfoWishList) =>{
    return {
        type: types.wishListInfoAdd,
        payload: {
            ...InfoWishList
        }
    }
}