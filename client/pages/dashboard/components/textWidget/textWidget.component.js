import React from 'react'
import {connect} from 'react-redux'
import {TextWidgetView} from './textWidget.view'
import {SettingTextWidget} from '../settingWidget/settingTextWidget/settingTextWidget.component'
import {changeSettingTextAction} from './textWidget.action'

@connect(state => ({}), ({ changeSettingTextAction }))
export class TextWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'display',
            titleSetting: this.props.data.title,
            text: this.props.data.configs.text
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
    onTitleSettingChangeEvent = (event) => {
        return this.setState({ titleSetting: event.target.value })
    }
    onTextSettingChangeEvent = (event) => {
        return this.setState({ text: event.blocks[0].text })
    }
    onSubmitSettingEvent = () => {
        this.props.changeSettingTextAction(this.state.titleSetting, this.state.text, this.props.data.id)

        return this.setState({mode: 'display'})
    }

    render() {
        if (this.state.mode === 'display')
        {
            return <TextWidgetView data = {this.props.data} settingClick = {this.settingClickEvent} dashboardMode = {this.props.dashboardMode}/>
        }

            return <SettingTextWidget cancelClick = {this.cancelClickEvent} data = {this.props.data} onTitleSettingChange = {this.onTitleSettingChangeEvent}
                                      onTextSettingChange = {this.onTextSettingChangeEvent} onSubmitSetting = {this.onSubmitSettingEvent}/>
    }
}

