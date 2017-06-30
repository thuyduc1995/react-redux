import React from 'react'
import cssModules from 'react-css-modules'
import style from '../settingWidget.style.scss'
import { FormControl } from 'react-bootstrap'


export const DatatableSettingView = cssModules(({activeColumn, disableColumn, changeFromActive, changeToActive, dataSource, changeDataSource}) => {
    let defaultSource = ['Contacts', 'Stocks']


return (
        <div styleName="container--setting-widget">
            <h5 styleName="title--setting-widget">Data source:</h5>
            <FormControl componentClass="select" onChange = {changeDataSource}>
                {
                    typeof (dataSource) !== "undefined" ?
                        <option value = {dataSource}>{dataSource}</option> :
                        defaultSource.map(src => { return <option value = {src}>{src}</option> })
                }
            </FormControl>
            <div styleName="column-selection--container">
                <div styleName="column--Columns">
                    <h5 styleName="title--setting-widget">Columns</h5>
                    <div styleName="column--Columns--container">
                        {
                            disableColumn.map(column => {
                                return <div styleName="column--element" onClick = { () => changeToActive(column)}>{column}</div>
                            })
                        }
                    </div>
                </div>
                <div styleName="column--Selected">
                    <h5 styleName="title--setting-widget">Selected column</h5>
                    <div styleName="column--Selected--container">
                        {
                            activeColumn.map(column => {
                                return <div styleName="column--element" onClick = { () => changeFromActive(column)}>{column}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}, style)

