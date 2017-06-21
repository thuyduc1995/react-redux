import React from 'react'
import cssModules from 'react-css-modules'
import style from './todoWidget.style.scss'
import {FormControl, ControlLabel, Button, ListGroup, ListGroupItem} from 'react-bootstrap'

export const TodoWidgetView = cssModules(() => {
    return (
        <div>
            <div className="panel panel-default" styleName="panel">
                <div className="panel-heading" styleName="panel-heading">
                    Add Widget
                    <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon"></span>
                </div>
                <div className="panel-body" styleName="panel-body">
                    <FormControl
                        type="text"
                        placeholder="What needs to be done?"
                        styleName="form--input"
                    />
                    <ControlLabel styleName="form--first-text ">x Items left</ControlLabel>
                    <Button type="submit" styleName="form--button">All</Button>
                    <Button type="submit" styleName="form--button">Active</Button>
                    <Button type="submit" styleName="form--button">Completed</Button>
                    <ControlLabel styleName="form--last-text">Clear Completed</ControlLabel>
                    <div styleName="list--container">
                        <ListGroup fill>
                            <ListGroupItem styleName="list--item">
                                <div styleName="icon--not-done">
                                    <span className="glyphicon glyphicon-ok-circle" styleName="icon--done" style={{display: 'none'}}></span>
                                </div>
                                Item 1
                            </ListGroupItem>
                            <ListGroupItem styleName="list--item">
                                <div styleName="icon--not-done">
                                    <span className="glyphicon glyphicon-ok-circle" styleName="icon--done"></span>
                                </div>
                                Item 2
                            </ListGroupItem>
                            <ListGroupItem styleName="list--item">
                                <div styleName="icon--not-done">
                                    <span className="glyphicon glyphicon-ok-circle" styleName="icon--done" style={{display: 'none'}}></span>
                                </div>
                                Item 3
                                <span className="glyphicon glyphicon-remove" styleName="icon--remove"></span>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}, style)