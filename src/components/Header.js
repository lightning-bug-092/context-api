import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  import CartContext from '../contexts/CartContext';
export default class Header extends Component{
    render(){
        return(
            <div className="Header">
                 <Navbar color="light" light expand="md">
                    <NavbarBrand >
                        <Link to="/">HeIU</Link>
                    </NavbarBrand>
                    <NavbarToggler  />
                    <Collapse  navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <NavLink>
                            <Link to="/product" style={{ textDecoration: 'none' }}>Product</Link>
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink>
                            <CartContext.Consumer>
                                {({item}) => 
                                <Link
                                 to="/cart"
                                 style={{ textDecoration: 'none' }}>
                                     Cart({item.length})
                                </Link> }
                            
                            </CartContext.Consumer>
                        </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}