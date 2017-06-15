import React from 'react'
import {SettingWidgetView} from './settingWidget.view'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'
import { LoginView } from '../../../login/login.view'

@connect(state => ({dashboard: state.dashboards}))
export class SettingWidget extends React.Component {
    render() {
        return <SettingWidgetView/>
    }
}
