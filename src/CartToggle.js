import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "./actions";
import { Button } from "reactstrap";

const CartToggle = ({productId}) => {
    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const addToCart = (productId) => {
        dispatch(addItem(productId));
    };
    const removeFromCart = (productId) => {
        dispatch(removeItem(productId));
    };    return (
        <div className="CartToggle">
            <Button 
                className="m-2" 
                color="primary"
                size="sm" 
                onClick={() => addToCart(productId)}
            >+</Button>
            <span>{cart[productId] ? cart[productId] : 0}</span>
            <Button 
                className="m-2"
                color="primary"
                size="sm" 
                onClick={() => removeFromCart(productId)}
            >-</Button>
        </div>
    )
};

export default CartToggle;