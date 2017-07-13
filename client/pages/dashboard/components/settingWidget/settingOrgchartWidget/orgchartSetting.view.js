import React from 'react'
import cssModules from 'react-css-modules'
import style from '../settingWidget.style.scss'
import { FormControl } from 'react-bootstrap'

export const OrgchartSettingView = cssModules(({contacts, onChangeRoot, data}) => {
    return (
        <div styleName="container--setting-widget">
            <h5 styleName="title--setting-widget">Root contact:</h5>
            <FormControl componentClass="select" onChange={onChangeRoot} defaultValue={data.configs.rootId} >
                {
                    contacts.map(item => {
                        return <option value={item.id}>{item.firstName} {item.lastName}</option>
                    })
                }
            </FormControl>
            <br/>
        </div>
    )
}, style)

