import React from 'react'
import {TodoWidgetView} from './todoWidget.view'
import {connect} from 'react-redux'

@connect(state => ({task: state.tasks}))
export class TodoWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: 'all'
        }
    }
    clickEvent = (id) => {
        console.log(id)
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
        return <TodoWidgetView data = {this.props.data} task={this.props.task} clickHandle = {this.clickEvent} visibility={this.state.visibility} changeVisibility={this.changeVisibilityEvent}/>
    }
}
