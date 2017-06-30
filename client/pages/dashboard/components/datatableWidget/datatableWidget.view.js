import React from 'react'
import cssModules from 'react-css-modules'
import style from './datatableWidget.style.scss'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import {TitleWidgetView} from '../titleWidget.view'

let renderShowsTotal = (start, to, total) => {
    return (
        <h4 style={{'paddingLeft': '15px', 'marginBottom': '-20px'}}>
            { start } to { to } of {total} Results
        </h4>
    )
}

export const DatatableWidgetView = cssModules(({data, contact, stock, settingClick, dashboardMode, dataSource, onRemove}) => {
    let listField = data.configs.activeColumn
    let dataField = dataSource === 'Contacts' ? contact : stock
    const options = {
        page: 1,
        sizePerPage: 5,
        pageStartIndex: 1,
        paginationSize: 3,
        prePage: '<<',
        nextPage: '>>',
        hideSizePerPage: true,
        alwaysShowAllBtns: true,
        paginationPosition: 'top',
        paginationShowsTotal: renderShowsTotal
    }

    return (
        <div>
            <div className="panel panel-default" styleName="panel">
                <TitleWidgetView widgetTitle={data.title} settingClick = {settingClick} dashboardMode = {dashboardMode} onRemove = {onRemove}/>
                <div className="panel-body" styleName="panel-body">
                    <BootstrapTable data={dataField} striped hover pagination condensed={true} options={ options } styleName='datatable' bordered={ false }>
                        <TableHeaderColumn dataField='defaultIsKey' dataSort isKey={true} style={{'display': 'none'}} hidden>First Name</TableHeaderColumn>
                        {
                            listField.map(field => {
                                return <TableHeaderColumn dataField={field} dataSort>{field.toUpperCase()}</TableHeaderColumn>
                            })
                        }
                    </BootstrapTable>
                </div>
            </div>
        </div>
    )
}, style)

