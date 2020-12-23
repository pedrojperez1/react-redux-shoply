import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CartToggle from "./CartToggle";

const ItemDetails = () => {
    const { id } = useParams();
    const products = useSelector(state => state.products);
    const item = products.filter(p => p.id === id)[0];
    console.log(item.image_url);
    return (
        <div className="ItemDetails">
            <Container>
                <Row>
                    <Col xs="4">
                        <img className="img-fluid" src={item.image_url} alt="item"></img>
                    </Col>
                    <Col xs="8" className="details">
                        <h1>{item.name}</h1>
                        <h3>${item.price}</h3>
                        <p>{item.description}</p>
                        <CartToggle productId={item.id}/>
                        <Link to="/"><p>Back to Products</p></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default ItemDetails;