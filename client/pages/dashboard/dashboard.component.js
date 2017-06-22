import React from 'react'
import {DashboardView} from './dashboard.view'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'
import {interactWithServer} from '../../../client/dataHandler/dataLoader'

@connect(state => ({dashboard: state.dashboards}))
export class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dashboard: []
        }
    }
    componentDidMount() {
        interactWithServer('http://localhost:8080/api/dashboards', 'GET').then((result) => {
            this.setState({dashboard: result})
        })
    }
    render() {
        if (!sessionStorage.getItem('jwtToken')) {
            browserHistory.push('/login')
        }
        console.log(this.props.dashboard)
        this.state.dashboard.forEach(obj => {
            console.log(obj.id)
        })

return <DashboardView data={this.state.dashboard}/>
    }
}
