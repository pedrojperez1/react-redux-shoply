import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
    const cart = useSelector(store => store.cart);
    const products = useSelector(store => store.products);
    const cartArray = [];
    for (let item in cart) {
        const nextItem = products.filter(p => p.id === item)[0];
        nextItem.quantity = cart[item];
        cartArray.push(nextItem);
    }
    const total = cartArray.reduce((tot, next) => tot + next.price * next.quantity, 0);
    return (
        <div className="Cart">
            <h1>Your Shopping Cart</h1>
            <Container>
                <Row>
                    <Col>
                        {cartArray.map(item => (
                            <CartItem name={item.name} price={item.price} quantity={item.quantity} productId={item.id}/>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col className="text-right">
                        <h2>Total: <b>${total}</b></h2>
                    </Col>
                </Row>
            </Container>
            <Link to="/">Home</Link>
        </div>
    )
};

export default Cart;