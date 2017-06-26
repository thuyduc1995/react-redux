import React from 'react'
import {DatatableWidgetView} from './datatableWidget.view'
import {connect} from 'react-redux'

@connect(state => ({contact: state.contacts}))
export class DatatableWidget extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <DatatableWidgetView data = {this.props.data} contact={this.props.contact}/>
    }
}
