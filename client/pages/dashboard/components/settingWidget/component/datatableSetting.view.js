import React from 'react'
import cssModules from 'react-css-modules'
import style from './chooseWidget.style.scss'
import { FormControl } from 'react-bootstrap'

let array1 = ['Contacts', 'Dashboards', 'Todos']

const newArray = array1.map(item => <option value={item}>{item}</option>)

const htmlstring =
    <div styleName="container--setting-widget">
        <h5 styleName="title--setting-widget">Data source:</h5>
        <FormControl componentClass="select">
            {newArray}
        </FormControl>
        <div styleName="column-selection--container">
            <div styleName="column--Columns">
                <h5 styleName="title--setting-widget">Columns</h5>
                <div styleName="column--Columns--container">
                    <div styleName="column--element">ID</div>
                    <div styleName="column--element">Email</div>
                    <div styleName="column--element">Phone</div>
                </div>
            </div>
            <div styleName="column--Selected">
                <h5 styleName="title--setting-widget">Selected column</h5>
                <div styleName="column--Selected--container">
                    <div styleName="column--element">Name</div>
                    <div styleName="column--element">Title</div>
                </div>
            </div>
        </div>
    </div>


export const DatatableSettingView = cssModules(() =>
{
    return (
       htmlstring
    )
}, style)


//
//     <div styleName="container--setting-widget">
//     <h5 styleName="title--setting-widget">Data source:</h5>
// <FormControl componentClass="select">
//     <option value="contact">Contacts</option>
//     <option value="dashboard">Dashboards</option>
//     <option value="todo">Todos</option>
//     </FormControl>
//     </div>