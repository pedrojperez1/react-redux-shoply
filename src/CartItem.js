import React from "react";
import { Container, Row, Col, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import CartToggle from "./CartToggle";

const CartItem = ({name, price, quantity, productId}) => {
    return (
        <div className="CardItem my-1">
            <Card>
                <CardBody>
                    <Container>
                        <Row>
                            <Col xs="4">
                                <CardTitle>{name}, ${price}</CardTitle>
                            </Col>
                            <Col xs="4">
                                <CartToggle productId={productId}/>
                            </Col>
                            <Col xs="4">
                                <h5>${price * quantity}</h5>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
};

export default CartItem;