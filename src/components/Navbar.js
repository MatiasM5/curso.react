import React from "react";
import CartWidget  from "./CartWidget";


const NavBar = () => {
    return (
    <nav className="bg">
       <ul className="nav justify-content-end">
       <li className="nav-item">
        <a className="nav active"  href="#">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav active"  href="#">Productos</a>
        </li>
        <li className="nav-item">
        <a className="nav" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
        <a className="nav" href="#">Contacto</a>
        </li>
        <div className="cart">
            <CartWidget/>
        </div>
            
       </ul>
    </nav>

    );
}

export default NavBar;
