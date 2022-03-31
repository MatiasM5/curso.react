import React from "react";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const CartWidget = () => {
    return (
        <Badge badgeContent={6} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;
