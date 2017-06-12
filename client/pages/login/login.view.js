import React from 'react'
import {Form, FormControl, FormGroup, Button, Row, Col} from 'react-bootstrap'
import cssModules from 'react-css-modules'
import style from './login.style.scss'

export const LoginView = cssModules(({onChangeEvent, onSaveEvent}) => {
    return (
        <Row className="show-grid">
            <Col mdOffset={4} md={4} >
                <form className="form-control" styleName="login__form">
                    <h2 className="form-signin-heading" styleName="login__title">Login to Your Account</h2>
                    <input
                        type="text"
                        styleName='login__input'
                        className="form-control"
                        name="id"
                        placeholder="Username"
                        required=""
                        autoFocus=""
                        onChange={onChangeEvent}/>
                    <input
                        type="password"
                        styleName='login__input'
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        required=""
                        onChange={onChangeEvent}/>
                    <Button bsStyle="primary" styleName="login__button" onClick={onSaveEvent}>Login</Button>
                </form>
            </Col>
        </Row>
    );

}, style)

