import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import CartWidget  from "./CartWidget";
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
    <nav className="bg">
       
       <ul className="nav justify-content-end">
          <Link to= "./" className='titulo'> OUTFIT-TEAMS</Link>
       <li className="nav-item">
        <Link to="./" className="nav active"  >Home</Link>
        </li>
        <li className="nav-item">
        <Link to="./category/A" className="nav active"> Europa </Link>
        </li>
        <li className="nav-item">
        <Link to="./category/B" className="nav"> America </Link>
        </li>
        <div className="cart"> 
           <a href="/cart"> <CartWidget/> </a>
        </div>  
       </ul>
    </nav>

    );
}

export default NavBar;
