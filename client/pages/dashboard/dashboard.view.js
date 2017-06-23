import React from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'
import cssModules from 'react-css-modules'
import {Todos} from './components'
import style from './dashboard.style.scss'
import {AddWidget} from './components/addWidget/addWidget.component'
import {TextWidget} from './components/textWidget/textWidget.component'
import {TodoWidget} from './components/todoWidget/todoWidget.component'
import {DatatableWidget} from './components/datatableWidget/datatableWidget.component'

export const DashboardView = cssModules(({dashboard}) => {
return (
        <div styleName='dashboard'>
            <div styleName='dashboard__title'>
                <h4>{dashboard.title}</h4>
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
                {
                    dashboard.widgets.map(obj => {
                        switch (obj.widgetType) {
                            case 'TEXT_WIDGET':
                                return <TextWidget data={obj} key={obj.id}/>
                            case 'DATATABLE_WIDGET':
                                return <DatatableWidget data={obj} key={obj.id}/>
                            case 'TODO_WIDGET':
                                return <TodoWidget data={obj} key={obj.id}/>
                            default:
                                return <AddWidget isNewWidget key={obj.id}/>
                        }
                    })
                }
            </div>
        </div>
    )
}, style, {errorWhenNotFound: false})

// <AddWidget isNewWidget/>
// <DatatableWidget/>
// <TodoWidget/>
// <AddWidget isNewWidget/>
// <TextWidget />
// <AddWidget isNewWidget/>
// <DatatableWidget/>