import { gifts } from "../data/gifts";

export const getGiftByEvent = (tipoEvento = '') =>{
    if(tipoEvento === ''){
        return [];
    }

    return gifts.filter(gift => gift.tipoEvento.includes(tipoEvento));
}