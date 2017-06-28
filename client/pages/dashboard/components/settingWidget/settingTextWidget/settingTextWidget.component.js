import React from 'react'
import {SettingTextWidgetView} from './settingTextWidget.view'
import { convertToRaw } from 'draft-js'

export class SettingTextWidget extends React.Component {
    constructor(props) {
        super(props)
    }
    onEditorChangeEvent = (event) => {
        console.log(event)
    }
    render() {
        return <SettingTextWidgetView cancelClick = {this.props.cancelClick} data = {this.props.data} onEditorChange = {this.onEditorChangeEvent}/>
    }
}
