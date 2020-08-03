import React from 'react';
import logo from '../../logo.svg';
import './navbar.scss';
export default function Navbar() {
    return (
        <nav className="navbar">
<img src={logo} alt="logo component" />
        <ul className="nav-links">
            <li><a href="/" className="nav-link">home</a></li>
            <li><a href="/" className="nav-link">about</a></li>
            <li><a href="/" className="nav-link active">tour</a></li>
        </ul>
        </nav>
    )
}
