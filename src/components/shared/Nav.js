import React from 'react';
import logo from '../../images/rose-emb.png';

const Nav = () => (
    <div class="nav">
        <div class="nav-logo">
            <a href='/'><img src={logo}/></a>
        </div>
        <div class="nav-items">
            <a href='/'>Home</a>
            <a href='/work'>Work</a>
            <a href='/work'>About</a>
            <a href='/work'>Contact</a>
        </div>
    </div>
)

export default Nav;