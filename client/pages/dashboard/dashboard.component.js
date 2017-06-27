import React from 'react'
import {DashboardView} from './dashboard.view'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'
import {interactWithServer} from '../../../client/dataHandler/dataLoader'

@connect(state => ({dashboards: state.dashboards}))
export class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dashboardMode: 'edit'
        }
    }
    changeViewModeEvent = (event) => {
        event.preventDefault()

        return this.setState({dashboardMode: 'view'})
    }
    changeEditModeEvent = (event) => {
        event.preventDefault()

        return this.setState({dashboardMode: 'edit'})
    }
    render() {
        if (!sessionStorage.getItem('jwtToken')) {
            browserHistory.push('/login')
        }

        return <DashboardView dashboard={this.props.dashboards[0]} changeViewMode = {this.changeViewModeEvent} changeEditMode = {this.changeEditModeEvent} dashboardMode = {this.state.dashboardMode}/>
    }
}


// componentDidMount() {
//     interactWithServer('http://localhost:8080/api/dashboards', 'GET').then((result) => {
//         this.setState({dashboard: result})
//     })
// }


