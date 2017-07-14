import React from 'react'
import {DashboardView} from './dashboard.view'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {changeLayoutAction} from './dashboard.action'
import decode from 'jwt-decode'

@connect(state => ({dashboards: state.dashboards}), ({changeLayoutAction}))
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
    };
    changeEditModeEvent = (event) => {
        event.preventDefault()

        return this.setState({dashboardMode: 'edit'})
    };
    changeLayoutTypeEvent = (event) => {
        return this.props.changeLayoutAction(event.target.value)
    };

    render() {
        if (sessionStorage.getItem('jwtToken') && decode(sessionStorage.getItem('jwtToken')).username === 'admin') {
            return (
                <DashboardView
                        dashboard={ this.props.dashboards[0] }
                        changeViewMode={ this.changeViewModeEvent }
                        changeEditMode={ this.changeEditModeEvent }
                        dashboardMode={ this.state.dashboardMode }
                        changeLayoutType={ this.changeLayoutTypeEvent }
                        layoutType={ this.props.dashboards[0].layoutType }
                />
            )
        }
        browserHistory.push('/login')

        return null
    }
}


// componentDidMount() {
//     interactWithServer('http://localhost:8080/api/dashboards', 'GET').then((result) => {
//         this.setState({dashboard: result})
//     })
// }
