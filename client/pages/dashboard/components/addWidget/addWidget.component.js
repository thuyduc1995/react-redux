import React from 'react'
import {AddWidgetView} from './addWidget.view'
import {SettingWidget} from '../settingWidget/settingWidget.component'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'
import { LoginView } from '../../../login/login.view'


export class AddWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isNewWidget: props.isNewWidget
        }
        this.createNewWidget = this.createNewWidget.bind(this)
    }
    createNewWidget(event) {
        event.preventDefault()
        return this.setState({ isNewWidget: false })
    }
    render() {
        if (this.state.isNewWidget)
        {
            return <AddWidgetView createNewWidgetEvent={this.createNewWidget}/>
        }
        else {
            return <SettingWidget/>
        }
    }
}
