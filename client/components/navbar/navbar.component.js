import React from 'react'
import { NavbarView } from './navbar.view'
import { browserHistory } from 'react-router'

export class Navbar extends React.Component {
    logOutEvent = () => {
        sessionStorage.clear()
        browserHistory.push('/login')
    }
    render() {
        return <NavbarView logOut={ this.logOutEvent }/>
    }
}
