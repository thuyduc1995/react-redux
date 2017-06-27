import React from 'react'
import {TodoWidgetView} from './todoWidget.view'
import {connect} from 'react-redux'
import {SettingTodoWidget} from '../settingWidget/settingTodoWidget/settingTodoWidget.component'

@connect(state => ({task: state.tasks}))
export class TodoWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: 'all',
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
    changeVisibilityEvent = (event) => {
        switch (event.target.value) {
            case 'completed':
                return this.setState({visibility: 'completed'})
            case 'active':
                return this.setState({visibility: 'active'})
            default:
                return this.setState({visibility: 'all'})
        }
    }
    render() {
        if (this.state.mode === 'display') {
            return <TodoWidgetView data={this.props.data} task={this.props.task} visibility={this.state.visibility}
                                   changeVisibility={this.changeVisibilityEvent} settingClick={this.settingClickEvent} dashboardMode = {this.props.dashboardMode}/>
        }

            return <SettingTodoWidget cancelClick = {this.cancelClickEvent} data = {this.props.data}/>
    }
}
