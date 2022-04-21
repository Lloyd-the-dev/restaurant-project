import React from "react"
import "./Navbar.css"
import logo from './logo.png';
import { Link } from 'react-router-dom';


function Navbar() {
    return <>
    <header>
       <img  className="logo" src={logo} alt="Logo" />
       <nav>
                <Link to="/Home"><a className="navbar" href="#">Home</a></Link>
                <Link to="/About"><a className="navbar" href="#">About</a></Link>
                <Link to="/Products"><a className="navbar" href="#">Products</a></Link>
                <Link to="/Contact"><a className="navbar" href="#">Contact</a></Link>
       </nav>
    </header>

    </>
}





export default Navbar