import React from 'react'
import {connect} from 'react-redux'
import {OrgchartWidgetView} from './orgchartWidget.view'
import {SettingOrgchartWidgetView} from '../settingWidget/settingOrgchartWidget/settingOrgchartWidget.view'
import {removeWidgetAction} from '../../dashboard.action'
import {changeSettingOrgchartAction} from './orgchartWidget.action'

@connect(state => ({contact: state.contacts}), ({ removeWidgetAction, changeSettingOrgchartAction }))
export class OrgchartWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'display',
            titleSetting: this.props.data.title,
            rootId: this.props.data.configs.rootId,
            fullscreen: false
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
    onRemoveEvent = () => {
        return this.props.removeWidgetAction(this.props.data.id)
    }
    onTitleSettingChangeEvent = (event) => {
        return this.setState({titleSetting: event.target.value})
    }
    onChangeRootEvent = (event) => {
        return this.setState({rootId: event.target.value})
    }
    onSubmitSettingEvent = () => {
        this.props.changeSettingOrgchartAction(this.props.data.id, this.state.titleSetting, this.state.rootId)

        return this.setState({mode: 'display'})
    }
    onFullscreenChangeEvent = () => {
        return this.setState({fullscreen: !this.state.fullscreen})
    }
    render() {
        if (this.state.mode === 'display')
        {
            return <OrgchartWidgetView data={this.props.data}
                                       settingClick={this.settingClickEvent}
                                       dashboardMode={this.props.dashboardMode}
                                       onRemove={this.onRemoveEvent}
                                       layoutType={this.props.layoutType}
                                       contacts={this.props.contact}
                                       fullscreen={this.state.fullscreen}
                                       onFullscreenChange={this.onFullscreenChangeEvent}/>
        }

            return <SettingOrgchartWidgetView cancelClick = {this.cancelClickEvent}
                                          data = {this.props.data}
                                          layoutType={this.props.layoutType}
                                          contacts={this.props.contact}
                                          onChangeRoot={this.onChangeRootEvent}
                                          onTitleSettingChange={this.onTitleSettingChangeEvent}
                                          onSubmitSetting={this.onSubmitSettingEvent}/>
    }
}