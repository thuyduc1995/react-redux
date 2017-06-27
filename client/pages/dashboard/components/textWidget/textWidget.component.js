import React from 'react'

import {TextWidgetView} from './textWidget.view'
import {SettingTextWidget} from '../settingWidget/settingTextWidget/settingTextWidget.component'

export class TextWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'display'
        }
    }
    settingClickEvent = (event) => {
        event.preventDefault()

        return this.setState({mode: 'setting'})
    }
    cancelClickEvent = (event) => {
        event.preventDefault()

        return this.setState({mode: 'display'})
    }
    render() {
        if (this.state.mode === 'display')
        {
            return <TextWidgetView data = {this.props.data} settingClick = {this.settingClickEvent} dashboardMode = {this.props.dashboardMode}/>
        }

            return <SettingTextWidget cancelClick = {this.cancelClickEvent} data = {this.props.data}/>
    }
}

