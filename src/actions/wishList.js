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

export const startAddGiftGetted = (gift) =>{
    return{
        type: types.wishListAddGiftGetted,
        payload: gift
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

export const dataCleaning = () =>{
    return {
        type: types.dataCleaning,    

    }
}

export const showGiftsByUid = () =>{
    return (dispatch, getState) =>{
        const {auth: {uid}} = getState();
        db.collection(`${uid}/whisList/lists`).onSnapshot((snapshot) => {
            const lists = [];
            snapshot.forEach( (snap) => {
                lists.push({
                    id: snap.id,
                    ...snap.data()
                });
            });
            dispatch(addGettedLists(lists));
            console.log(lists);
        });
    }
}

export const addGettedLists = (lists) =>{
    return{
        type: types.wishListFirebase,
        payload: {
            lists
        }
    }
}

export const deleteWishList = (id) =>{
    return(dispatch, getState) =>{
        const {auth: {uid}} = getState();
        db.collection(`${uid}/whisList/lists`).doc(id).delete()
            .then(Swal.fire('Eliminado', 'Se ha eliminado de manera correcta la wish list', 'success'));
    }
}