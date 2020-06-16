import React from 'react';
import logo from '../../images/rose-emb.png';

const Nav = () => (
    <div class="nav">
        <div class="nav-logo">
            <a href='/'><img src={logo}/></a>
        </div>
        <div class="nav-items">
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
)

export default Nav;