import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export function addItem(productId) {
    console.log('adding to cart:', productId);
    return {
        type: ADD_TO_CART,
        payload: productId
    };
}

export function removeItem(productId) {
    console.log('removing from cart:', productId);
    return {
        type: REMOVE_FROM_CART,
        payload: productId
    }
}