import React from 'react'
import {SettingNewWidgetView} from './settingNewWidget.view'

export class SettingNewWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            targetType: this.props.data.widgetType
        }
    }


    render() {
        return <SettingNewWidgetView changeDropdown={this.changeDropdown}
                                     typeWidget={this.state.targetType}
                                     cancelClick={this.props.cancelClick}
                                     data={this.props.data}
                                     layoutType={this.props.layoutType}/>
    }
}
