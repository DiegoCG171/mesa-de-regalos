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

export const removedGift = (gift) =>{
    return{
        type: types.wishListRemoveGift,
        payload: {
            removed
        }
    }
}

// export const startRegisterFinalWishList = (WishListFinal) =>{
//     return(dispatch) => {

//     }
// }