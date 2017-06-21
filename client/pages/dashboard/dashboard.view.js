import React from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'
import cssModules from 'react-css-modules'
import {Todos} from './components'
import style from './dashboard.style.scss'
import {AddWidget} from './components/addWidget/addWidget.component'
import {TextWidget} from './components/textWidget/textWidget.component'
import {TodoWidget} from './components/todoWidget/todoWidget.component'
import {DatatableWidget} from './components/datatableWidget/datatableWidget.component'
export const DashboardView = cssModules(() => {
    return (
        <div styleName='dashboard'>
            <div styleName='dashboard__title'>
                <h4>Dashboard Title</h4>
                <div styleName='dashboard__layout-selector'>
                    <ButtonGroup>
                        <Button>View</Button>
                        <Button>Edit</Button>
                    </ButtonGroup>
                </div>
                <div styleName='dashboard__layout-selector'>
                    <ButtonGroup>
                        <Button>Left</Button>
                        <Button>Right</Button>
                        <Button>Middle</Button>
                        <Button>Top</Button>
                        <Button>Bottom</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div styleName='dashboard__body'>
                <AddWidget isNewWidget/>
                <DatatableWidget/>
                <TodoWidget/>
                <AddWidget isNewWidget/>
                <TextWidget />
                <AddWidget isNewWidget/>
                <DatatableWidget/>
            </div>
        </div>
    )
}, style, {errorWhenNotFound: false})
