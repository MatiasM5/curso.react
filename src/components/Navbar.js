import React from "react";
import CartWidget  from "./CartWidget";


const Navbar = () => {
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
        <div>
            <CartWidget/>
        </div>
            
       </ul>
    </nav>

    );
}

export default Navbar;
