import React from 'react'
import {DashboardView} from './dashboard.view'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'

@connect(state => ({dashboard: state.dashboards}))
export class Dashboard extends React.Component {

    render() {

        if (!sessionStorage.user) {
            browserHistory.push('/login')
        }
        return <DashboardView dashboard={this.props.dashboard}/>
    }
}
