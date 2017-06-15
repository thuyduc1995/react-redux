import React from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem, Button, DropdownButton, MenuItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import style from './navbar.style.scss'
import cssModules from 'react-css-modules'


export const NavbarView = cssModules(() => {
    return (
        <Navbar inverse fixedTop fluid styleName= 'navbar'>
            <Navbar.Header>
                <Navbar.Brand>
                    <span className="glyphicon glyphicon-dashboard" styleName="navbar__brand"></span>
                    <Link to='/dashboard' styleName="navbar__brand"> Dashboard</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight styleName="nav__right">
                <span className="glyphicon glyphicon-user" styleName="navbar__brand"></span>
                <DropdownButton title="Admin" styleName="dropdown__button" id="bg-nested-dropdown">
                    <MenuItem eventKey="1">Logout</MenuItem>
                </DropdownButton>
            </Nav>
        </Navbar>
    )
}, style)
