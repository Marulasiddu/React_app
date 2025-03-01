import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Würth_logo from '../logo.svg';
import {ButtonContainer} from './Button';
import styled from 'styled-components';


class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm 
            navbar-dark px-sm-5">
                {/* 
                http://www.iconfinder.com/icons/1243689/call_phone_icon  */}
                <Link to='/'>
                    <img src={Würth_logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className= "navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                    <Link to ="/" className="nav-link">
                        Products and Samples
                    </Link>
                    </li>
                </ul>
                <ul className= "navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                    <Link to ="/services" className="nav-link">
                        Services and Solutions
                    </Link>
                    </li>
                </ul>
               
                <Link to="./cart" className="ml-auto">
                    <ButtonContainer><span className="mr-2"> 
                    <i className="fas fa-cart-plus" />
                    </span>
                    Our Cart
                    </ButtonContainer>
                </Link>
               
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite)! important;
    font-size: 1.3rem;
    text-transform: capitalize !important;

}
`;


export default Navbar;
