import React from 'react'
import {TodoWidgetView} from './todoWidget.view'
import {connect} from 'react-redux'
import {SettingTodoWidget} from '../settingWidget/settingTodoWidget/settingTodoWidget.component'
import {addTodoTaskAction, addTodoDashboardAction, changeTaskAction, removeTaskAction, removeTaskDashboardAction, changeSettingTodoAction} from './todoWidget.action'
import {removeWidgetAction} from '../../dashboard.action'

let find = (list) => {
    let maxId = 0

    list.forEach(item => {
        if (item.id > maxId) {
            maxId = item.id
        }
    })

    return maxId
}

@connect(state => ({ task: state.tasks }), ({ addTodoTaskAction, addTodoDashboardAction, changeTaskAction, removeTaskAction, removeTaskDashboardAction, changeSettingTodoAction, removeWidgetAction }))

export class TodoWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: 'all',
            mode: 'display',
            task: props.task,
            titleSetting: this.props.data.title
        }
    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(nextProps.task) !== JSON.stringify(this.props.task)) {
            this.setState({
                    task: nextProps.task
                })
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
    addTodoEvent = (event) => {
        if (event.keyCode === 13) {
            let currentId = find(this.props.task)

            this.props.addTodoTaskAction(event.target.value, currentId + 1)
            this.props.addTodoDashboardAction(this.props.data.id, currentId + 1)
            event.target.value = ''
        }
    }
    changeTaskEvent = (id) => {
        this.props.changeTaskAction(id)
    }
    removeTaskEvent = (id) => {
        this.props.removeTaskAction(id)
        this.props.removeTaskDashboardAction(this.props.data.id, id)
    }
    clearCompletedEvent = (tasks) => {
        tasks.forEach(task => {
            this.props.removeTaskAction(task.id)
            this.props.removeTaskDashboardAction(this.props.data.id, task.id)
        })
    }
    onTitleSettingChangeEvent = (event) => {
        return this.setState({ titleSetting: event.target.value })
    }
    onSubmitSettingEvent = () => {
        this.props.changeSettingTodoAction(this.state.titleSetting, this.props.data.id)

        return this.setState({mode: 'display'})
    }
    onRemoveEvent = () => {
        return this.props.removeWidgetAction(this.props.data.id)
    }
    render() {
        if (this.state.mode === 'display') {
            return <TodoWidgetView data={this.props.data}
                                   task={this.state.task}
                                   visibility={this.state.visibility}
                                   changeVisibility={this.changeVisibilityEvent}
                                   settingClick={this.settingClickEvent}
                                   dashboardMode={this.props.dashboardMode}
                                   addTodo={this.addTodoEvent}
                                   changeTask={this.changeTaskEvent}
                                   removeTask={this.removeTaskEvent}
                                   clearCompleted={this.clearCompletedEvent}
                                   onRemove={this.onRemoveEvent}
                                   layoutType={this.props.layoutType}/>
        }

            return <SettingTodoWidget cancelClick={this.cancelClickEvent}
                                      data={this.props.data}
                                      onTitleSettingChange={this.onTitleSettingChangeEvent}
                                      onSubmitSetting={this.onSubmitSettingEvent}
                                      layoutType={this.props.layoutType}/>
    }
}
// hiugigk