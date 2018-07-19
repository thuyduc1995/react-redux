import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import cssModules from 'react-css-modules'
import style from './dashboard.style.scss'
import { AddWidget } from './components/addWidget/addWidget.component'
import { TextWidget } from './components/textWidget/textWidget.component'
import { TodoWidget } from './components/todoWidget/todoWidget.component'
import { DatatableWidget } from './components/datatableWidget/datatableWidget.component'
import { OrgchartWidget } from './components/orgchartWidget/orgchartWidget.component'

export const DashboardView = cssModules(({ dashboard, changeViewMode, changeEditMode, dashboardMode, changeLayoutType, layoutType }) => {
    return (
        <div styleName='dashboard'>
            <div styleName='dashboard__title'>
                <h4>{dashboard.title}</h4>
                <div styleName='dashboard__layout-selector'>
                    <ButtonGroup>
                        <Button onClick={ changeViewMode }>View</Button>
                        <Button onClick={ changeEditMode }>Edit</Button>
                    </ButtonGroup>
                </div>
                <div styleName='dashboard__layout-selector'>
                    <ButtonGroup>
                        <Button value='1_COLUMN' onClick={ changeLayoutType }>1 Column</Button>
                        <Button value='2_COLUMN' onClick={ changeLayoutType }>2 Column</Button>
                        <Button value='3_COLUMN' onClick={ changeLayoutType }>3 Column</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div styleName='dashboard__body'>
                {
                    dashboard.widgets.map(obj => {
                        switch (obj.widgetType) {
                            case 'TEXT_WIDGET':
                                return (
                                    <TextWidget
                                        data={ obj }
                                        dashboardMode={ dashboardMode }
                                        key={ obj.id }
                                        layoutType={ layoutType }
                                    />
                                )
                            case 'DATATABLE_WIDGET':
                                return (
                                    <DatatableWidget
                                        data={ obj }
                                        dashboardMode={ dashboardMode }
                                        key={ obj.id }
                                        layoutType={ layoutType }
                                    />
                                )
                            case 'TODO_WIDGET':
                                return (
                                    <TodoWidget
                                        data={ obj }
                                        dashboardMode={ dashboardMode }
                                        key={ obj.id }
                                        layoutType={ layoutType }
                                    />
                                )
                            case 'ORGCHART_WIDGET':
                                return (
                                    <OrgchartWidget
                                        data={ obj }
                                        dashboardMode={ dashboardMode }
                                        key={ obj.id }
                                        layoutType={ layoutType }
                                    />
                                )
                            default:
                                return (
                                    <AddWidget
                                        data={ obj }
                                        dashboardMode={ dashboardMode }
                                        key={ obj.id }
                                        layoutType={ layoutType }
                                    />
                                )
                        }
                    })
                }
            </div>
        </div>
    )
}, style, { errorWhenNotFound: false })