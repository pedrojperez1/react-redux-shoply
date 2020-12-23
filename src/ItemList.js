import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import "./ItemList.css";

const ItemList = () => {
    const items = useSelector(store => store.products);
    return (
        <div className="ItemList d-flex flex-row flex-wrap">
            {items.map(i => (
                <Item 
                    key={i.id} 
                    productId={i.id} 
                    name={i.name} 
                    price={i.price} 
                    description={i.description} 
                    imageUrl={i.image_url}/>
            ))}
        </div>
    )
};

export default ItemList;