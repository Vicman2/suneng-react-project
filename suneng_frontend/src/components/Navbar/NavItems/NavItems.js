import React from 'react';
import NavItem from './NavItem/NavItem'
import './NavItems.css'

const NavItems = (props) => {
    return (
        <ul className="NavItems">
            <NavItem name="Home" url="/" active/>
            <NavItem name="Products" url="/" />
            <NavItem name="Services" url="/" />
            <NavItem name="About Us" url="/" />
            <NavItem name="Contact" url="/" />
        </ul>
    )
}

export default NavItems;