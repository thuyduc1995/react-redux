import React from 'react'
import {connect} from 'react-redux'
import {OrgchartWidgetView} from './orgchartWidget.view'
import {SettingOrgchartWidget} from '../settingWidget/settingOrgchartWidget/settingOrgchartWidget.component'
import {removeWidgetAction} from '../../dashboard.action'

@connect(state => ({contact: state.contacts}), ({ removeWidgetAction }))
export class OrgchartWidget extends React.Component {
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
    onRemoveEvent = () => {
        return this.props.removeWidgetAction(this.props.data.id)
    }
    render() {
        if (this.state.mode === 'display')
        {
            return <OrgchartWidgetView data={this.props.data}
                                       settingClick={this.settingClickEvent}
                                       dashboardMode={this.props.dashboardMode}
                                       onRemove={this.onRemoveEvent}
                                       layoutType={this.props.layoutType}/>
        }

            return <SettingOrgchartWidget cancelClick = {this.cancelClickEvent}
                                          data = {this.props.data}
                                          layoutType={this.props.layoutType}/>
    }
}

