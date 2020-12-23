import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const data = require("./data.json");

const products = [];
for (let k of Object.keys(data.products)) {
    products.push({...data.products[k], id: k});
}

const INITIAL_STATE = {
    products,
    cart: {}
}

function rootReducer(state=INITIAL_STATE, action) {
    const oldQuantity = state.cart[action.payload];
    switch (action.type) {
        case ADD_TO_CART:
            if (oldQuantity) {
                return {...state, cart: {...state.cart, [action.payload]: oldQuantity + 1}}
            } else {
                return {...state, cart: {...state.cart, [action.payload]: 1}}
            }

        case REMOVE_FROM_CART:
            if (oldQuantity) {
                let newCart;
                if (oldQuantity - 1 === 0) {
                    newCart = {...state.cart}
                    delete newCart[action.payload]
                } else {
                    newCart = {...state.cart, [action.payload]: oldQuantity - 1}
                }
                return {...state, cart: newCart}
            } else {
                return state
            }
            
        default:
            return state
    }
}

export default rootReducer;