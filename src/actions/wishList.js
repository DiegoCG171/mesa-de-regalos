import { types } from "../types/types";
import { firebase, googleProvider } from '../firestore/firebase-config';

export const registarWishList = (nombre, tipoEvento, fecha, calle, colonia, cp, telefono, exterior, interior) =>{
    return {
        type: types.register,
        payload: {
            nombre, 
            tipoEvento,
            fecha,
            calle,
            colonia,
            cp,
            telefono,
            exterior,
            interior
        }
    }
}