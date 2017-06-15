import React from 'react'
import { connect } from 'react-redux'
import { LoginView } from './login.view'
import { userLoginRequest } from './login.action'
import { browserHistory } from 'react-router'
@connect(state => state, { userLoginRequest })
export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    onChange(event) {
        let { name, value } = event.target
        return this.setState({ [name]: value });
    }
    onSave(event) {
        event.preventDefault()
        let { id, password } = this.state

        if (id === '' || password === '') {
            alert("ID and Password must be filled out")
        }
        else {
            this.props.userLoginRequest({ id, password })
                .then(
                    res => browserHistory.push('/dashboard')
                )
                .catch(err => alert(err))
        }
    }
    render() {
        return <LoginView onChangeEvent={this.onChange} onSaveEvent={this.onSave}/>
    }
}


