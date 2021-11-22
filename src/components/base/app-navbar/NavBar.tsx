import React from 'react';
import {  Link } from "react-router-dom";
import "./Navbar.scss";
import logo from '../../../src/ugly_logo.png';

function Navbar() {
    return(
        <nav className="header">
            <Link to="/" className="header__menu__logo">
                <img src={logo} />
            </Link>
            <div className="header__menu">
                <Link to="/gallery" className="header__menu__link">.gallery</Link>
            </div>
        </nav>
    )
}

export default Navbar;
