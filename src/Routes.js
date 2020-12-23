import React from "react";
import { Switch, Route, Link } from "react-router-dom"
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";
import Cart from "./Cart";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Link to="/cart">Cart</Link>
                <ItemList />
            </Route>
            <Route exact path="/products/:id">
                <ItemDetails />
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route>404 Not Found</Route>
        </Switch>
    )
}

export default Routes;