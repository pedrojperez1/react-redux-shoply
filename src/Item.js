import React from "react";
import { Link } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import "./Item.css";
import CartToggle from "./CartToggle";

const Item = ({productId, name, price, description, imageUrl}) => {
    
    return (
        <div className="Item d-flex">
            <Card>
                <CardImg top width="auto" src={imageUrl} alt="Card image cap" />
                <CardBody>
                    <Link to={`/products/${productId}`}><CardTitle tag="h5">{name}</CardTitle></Link>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{`$${price}`}</CardSubtitle>
                    <CardText>{description}</CardText>
                    <CartToggle productId={productId}/>
                </CardBody>
            </Card>
        </div>

    )
};

export default Item;