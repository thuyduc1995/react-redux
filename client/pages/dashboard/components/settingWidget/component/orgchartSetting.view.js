import React from 'react'
import cssModules from 'react-css-modules'
import style from './chooseWidget.style.scss'
import { FormControl } from 'react-bootstrap'

let array1 = ['Contacts','Dashboards','Todos']

const newArray = array1.map(item => <option value={item}>{item}</option>)

const htmlstring =
    <div styleName="container--setting-widget">
        <h5 styleName="title--setting-widget">Data source:</h5>
        <FormControl componentClass="select">
            {newArray}
        </FormControl>
    </div>


export const OrgchartSettingView = cssModules(() =>
{
    return (
        htmlstring
    )
}, style)

