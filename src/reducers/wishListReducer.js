import { types } from "../types/types";

const initialState = { newWishListInfo: null };

export const wishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.wishListInfoAdd:

            return{
                ...state,
                newWishListInfo: action.payload
            }
    
        default:
            return state;
    }
}
