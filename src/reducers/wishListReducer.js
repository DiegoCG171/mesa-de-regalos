import { types } from "../types/types";

const initialState = { newWishListInfo: null, giftAdded: [], wishListFirebase: null, wishListGetted: null }; 

export const wishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.wishListInfoAdd:

            return{
                ...state,
                newWishListInfo: action.payload
            }
        
        case types.wishListAddGift:

            return{
                ...state,
                giftAdded: [...state.giftAdded, action.payload]                      
            }

        case types.wishListDeleteGift:
            return {
                ...state,
                giftAdded: state.giftAdded.filter((gift) => gift.id !== action.payload )
            }
        
        case types.dataCleaning:
            return {
                ...state,
                giftAdded: []
            }

        case types.wishListFirebase:
            return{
                ...state,    
                wishListFirebase: action.payload
            }

        case types.wishListAddGiftGetted:
            return{
                ...state,
                wishListGetted: action.payload
            }

        default:
            return state;
    }
}
