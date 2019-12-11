import React from 'react'
import Aux from '../../hoc/Aux';
import NavItems from './NavItems/NavItems'
import Harmburger from '../UI/Harmburger/Harmburger'
import  './Navbar.css'

const navbar = (props) => {
    return (
        <Aux>
            <div className="Navbar" id={props.isTop? "" : "ScrollDown"}>
                <Harmburger clicked={props.toToggle}/>
                <div className="Logo">LOGO</div>
                <NavItems />
            </div>
        </Aux>
    )
}

export default navbar