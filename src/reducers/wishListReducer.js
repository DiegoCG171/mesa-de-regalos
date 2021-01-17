import { types } from "../types/types";

const initialState = { newWishListInfo: null, giftAdded: [] };

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

        default:
            return state;
    }
}
