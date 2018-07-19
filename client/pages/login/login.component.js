import React from 'react'
import { connect } from 'react-redux'
import { LoginView } from './login.view'
import { userLoginRequest } from './login.action'
import { browserHistory } from 'react-router'
@connect(state => state, { userLoginRequest })
export class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    onChangeEvent = (event) => {
        let { name, value } = event.target

        return this.setState({ [name]: value })
    }
    onSaveEvent = (event) => {
        event.preventDefault()
        let { username, password } = this.state

        if (username === '' || password === '') {
            console.log("ID and Password must be filled out")
        }
        else {
            this.props.userLoginRequest({ username, password })
                .then(
                    browserHistory.push('/dashboard')
                )
                .catch(
                    result => this.setState({ isWrong: result })
                )
        }
    }
    render() {
        return <LoginView onChange={ this.onChangeEvent } onSave={ this.onSaveEvent } />
    }
}


