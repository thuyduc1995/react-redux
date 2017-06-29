import React from 'react'
import cssModules from 'react-css-modules'
import style from './todoWidget.style.scss'
import {FormControl, ControlLabel, Button, ListGroup, ListGroupItem} from 'react-bootstrap'
import {TitleWidgetView} from '../titleWidget.view'

export const TodoWidgetView = cssModules(({data, task, visibility, changeVisibility, settingClick, dashboardMode, addTodo, changeTask, removeTask, clearCompleted}) => {
    let tempTask = {}
    let itemAll = []

    data.configs.task.forEach(id => {
        task.forEach(item => {
             if (item.id === id) {
                 tempTask = item
             }
         })
        itemAll.push(tempTask)
    })


    let itemCompleted = itemAll.filter(item => {
        return item.isCompleted
    })
    let itemRemaining = itemAll.filter(item => {
        return !item.isCompleted
    })

    let visibleChange = (mode) => {
        switch (mode) {
            case 'completed' :
                return itemCompleted
            case 'active' :
                return itemRemaining
            default :
                return itemAll
        }
    }
    let visibleMode = visibleChange(visibility)

    return (
        <div>
            <div className="panel panel-default" styleName="panel">
                <TitleWidgetView widgetTitle = {data.title} settingClick = {settingClick} dashboardMode = {dashboardMode}/>
                <div className="panel-body" styleName="panel-body">
                    <FormControl
                        type="text"
                        placeholder="What needs to be done?"
                        styleName="form--input"
                        onKeyDown = {addTodo}
                    />
                    <ControlLabel styleName="form--first-text ">{itemRemaining.length} Items left</ControlLabel>
                    <Button type="submit" styleName="form--button" value="all" onClick={changeVisibility}>All</Button>
                    <Button type="submit" styleName="form--button" value="active" onClick={changeVisibility}>Active</Button>
                    <Button type="submit" styleName="form--button" value="completed" onClick={changeVisibility}>Completed</Button>
                    <ControlLabel styleName="form--last-text" onClick = {() => clearCompleted(itemCompleted)}>Clear Completed</ControlLabel>
                    <div styleName="list--container">
                        <ListGroup fill>
                            {
                                visibleMode.map(item => {

                            if (item.isCompleted) {

                                return (
                                    <ListGroupItem styleName="list--item" key= {item.id}>
                                        <div styleName="icon--not-done">
                                            <span className="glyphicon glyphicon-ok-circle" styleName="icon--done" onClick={() => changeTask(item.id)}/>
                                        </div>
                                        <div style={{textDecoration: 'line-through', color: '#888888'}} styleName="item--content">
                                            <span> {item.task}</span>
                                        </div>
                                    </ListGroupItem>
                                )
                            }

                                return (
                                    <ListGroupItem styleName="list--item" key= {item.id}>
                                        <div styleName="icon--not-done" onClick={() => changeTask(item.id)}>
                                            <span className="glyphicon glyphicon-ok-circle" styleName="icon--done" style={{display: 'none'}}/>
                                        </div>
                                        <div styleName="item--content">
                                            <span> {item.task}</span>
                                            <span className="glyphicon glyphicon-remove" styleName="icon--remove" onClick={() => removeTask(item.id)}></span>
                                        </div>
                                    </ListGroupItem>
                                )

                                })
                            }
                        </ListGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}, style)