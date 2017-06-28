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
            password: '',
            isWrong: false
        }
    }
    onChange = (event) => {
        let { name, value } = event.target

        return this.setState({ [name]: value })
    }
    onSave = (event) => {
        event.preventDefault()
        let { username, password } = this.state

        if (username === '') {
            alert("ID and Password must be filled out")
        }
        else {
            this.props.userLoginRequest({ username, password })
                .then(
                    browserHistory.push('/dashboard')
                )
                .catch(
                    result => this.setState({isWrong: result})
                )
        }
    }
    render() {


        return <LoginView onChangeEvent={this.onChange} onSaveEvent={this.onSave} isWrong={this.state.isWrong}/>
    }
}


