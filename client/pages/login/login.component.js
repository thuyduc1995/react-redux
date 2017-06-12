import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {LoginView} from './login.view'
// import * as sessionActions from '../actions/sessionActions';
// import TextInput from './common/TextInput';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {credentials: {id: '', password: ''}}
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({credentials});
    }

    onSave(event) {
        event.preventDefault();
        if (this.state.credentials.id === "" || this.state.credentials.password === "") {
            alert("ID and Password must be filled out");
        }
        else {
            console.log(this.state.credentials.id);
            console.log(this.state.credentials.password);
        }
    }
    render() {
        return <LoginView onChangeEvent={this.onChange} onSaveEvent={this.onSave}/>
    }
}


