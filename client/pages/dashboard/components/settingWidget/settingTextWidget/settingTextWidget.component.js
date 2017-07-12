import React from 'react'
import {SettingTextWidgetView} from './settingTextWidget.view'

export class SettingTextWidget extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <SettingTextWidgetView cancelClick={this.props.cancelClick}
                                      data={this.props.data}
                                      onTitleSettingChange={this.props.onTitleSettingChange}
                                      onTextSettingChange={this.props.onTextSettingChange}
                                      onSubmitSetting={this.props.onSubmitSetting}
                                      layoutType={this.props.layoutType}/>
    }
}
