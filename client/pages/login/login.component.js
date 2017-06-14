import React from 'react'
import { connect } from 'react-redux'
import { LoginView } from './login.view'
import { userLoginRequest } from './login.action'

@connect(state => state, { userLoginRequest })
export class Login extends React.Component {
    render() {
        return <LoginView userLoginRequest={this.props.userLoginRequest} />
    }
}


