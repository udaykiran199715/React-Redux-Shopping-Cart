import {ADD_TO_CART , PLACE_ORDER} from './actionTypes'

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

export const placeOrder = (payload) => ({
    type: PLACE_ORDER,
    payload
})