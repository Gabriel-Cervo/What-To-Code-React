import React from 'react';
import Burger from './Burger';
import { Nav } from './Style';
import { LinkButton } from '../LinkButton/Button';

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                <img src="./img/idea.svg" alt="icon" />
                <span><LinkButton to="/" title="true">What to Code?</LinkButton></span>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar;