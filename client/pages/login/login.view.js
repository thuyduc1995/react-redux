import React from 'react'
import { Form, FormControl, FormGroup, Button, Row, Col } from 'react-bootstrap'
import cssModules from 'react-css-modules'
import style from './login.style.scss'
import { browserHistory } from 'react-router'

@cssModules(style, { errorWhenNotFound: false })
export class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: ''
        }
    }

    onChange(event) {
        let { name, value } = event.target
        this.setState({ [name]: value })
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
                    res => browserHistory.push('/')
                )
                .catch(err => alert(err))
        }
    }

    render() {
        let { id, password } = this.state
        return (
            <Row className="show-grid">
                <Col mdOffset={4} md={4} >
                    <form className="form-control" styleName="login__form">
                        <h2 className="form-signin-heading" styleName="login__title">Login to Your Account</h2>
                        <input
                            type="text"
                            styleName='login__input'
                            value={id}
                            className="form-control"
                            name="id"
                            placeholder="Username"
                            required=""
                            autoFocus=""
                            onChange={(e) => this.onChange(e)}/>
                        <input
                            type="password"
                            value={password}
                            styleName='login__input'
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            required=""
                            onChange={(e) => this.onChange(e)}/>
                        <Button bsStyle="primary" styleName="login__button" onClick={(e) => this.onSave(e)}>Login</Button>
                    </form>
                </Col>
            </Row>
        )
    }
}

LoginView.propTypes = {
    userLoginRequest: React.PropTypes.func.isRequired
}

