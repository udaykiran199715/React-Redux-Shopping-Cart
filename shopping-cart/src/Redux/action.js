import {ADD_TO_CART , PLACE_ORDER, QTY_INC, QTY_DEC, ADD_PRODUCT, EDIT_PRODUCT} from './actionTypes'

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

export const placeOrder = (payload) => ({
    type: PLACE_ORDER,
    payload
})

export const qtyInc = (payload) => ({
    type:QTY_INC,
    payload
})

export const qtyDec = (payload) => ({
    type:QTY_DEC,
    payload
})

export const addProduct = (payload) => ({
    type:ADD_PRODUCT,
    payload
})

export const editProduct = (payload) => ({
    type:EDIT_PRODUCT,
    payload
})