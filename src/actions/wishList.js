import Swal from "sweetalert2";
import { db } from "../firestore/firebase-config";
import { types } from "../types/types";

export const registarWishList = (InfoWishList) =>{
    return {
        type: types.wishListInfoAdd,
        payload: {
            ...InfoWishList
        }
    }
}

export const startAddGift = (gift) =>{
    return{
        type: types.wishListAddGift,
        payload: {
            ...gift
        }
    }
}

 export const startDeleteGift = (gift) =>{
     return{
         type: types.wishListDeleteGift,
         payload: gift.id
    }
 } 

export const startRegisterFinalWishList = () =>{
     return async(dispatch, getState) => {
        const {auth: {uid}, wishList: {newWishListInfo, giftAdded: gifts}} = getState();
        const wishListFinished = {...newWishListInfo, gifts};
        console.log(wishListFinished);
        await db.collection(`${uid}/whisList/lists`)
            .add(wishListFinished)
        Swal.fire('¡Registrada!', 'Tu lista de regalos se ha guardado satisfactoriamente', 'success');
        dispatch(dataCleaning());
    }
}

const dataCleaning = () =>{
    return {
        type: types.dataCleaning,

    }
}