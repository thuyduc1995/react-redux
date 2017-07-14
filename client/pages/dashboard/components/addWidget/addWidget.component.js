import React from 'react'
import { AddWidgetView } from './addWidget.view'
import { connect } from 'react-redux'
import { SettingNewWidgetView } from '../settingWidget/settingNewWidget/settingNewWidget.view'
import { difference } from 'underscore'
import { createTextWidget, createDatatableWidget, createTodoWidget, createOrgchartWidget } from './addWidget.action'

@connect(state => ({ contact: state.contacts, stock: state.stocks }), ({ createTextWidget, createTodoWidget, createDatatableWidget, createOrgchartWidget }))
export class AddWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'display',
            titleSetting: 'New Widget',
            text: this.props.data.configs.text,
            activeColumn: [],
            targetSource: 'Contacts',
            disableColumn: this.targetSource === 'Stocks' ?
                difference(Object.keys(this.props.stock[0]), []).map(item => item) :
                difference(Object.keys(this.props.contact[0]), []).map(item => item),
            dataSource: this.props.data.configs.dataSource,
            targetType: this.props.data.widgetType

        }
    }
    settingClickEvent = (event) => {
        event.preventDefault()

        return this.setState({ mode: 'setting' })
    }
    cancelClickEvent = (event) => {
        event.preventDefault()

        return this.setState({ mode: 'display' })
    }
    changeDropdownEvent = (event) => {
        return this.setState({ targetType: event.target.value })
    }
    onTitleSettingChangeEvent = (event) => {
        return this.setState({ titleSetting: event.target.value })
    }
    onSubmitSettingEvent = () => {
        switch (this.state.targetType) {
            case 'TEXT_WIDGET':
                return this.props.createTextWidget(this.state.text, this.state.titleSetting, this.props.data.id)
            case 'DATATABLE_WIDGET':
                return this.props.createDatatableWidget(this.state.targetSource,
                    this.state.activeColumn, this.state.titleSetting, this.props.data.id)
            case 'TODO_WIDGET':
                return this.props.createTodoWidget(this.state.titleSetting, this.props.data.id)
            case 'ORGCHART_WIDGET':
                return this.props.createOrgchartWidget(this.state.titleSetting, this.props.data.id)
            default:
                return null
        }

        return this.setState({ mode: 'display' })
    }
    onTextSettingChangeEvent = (event) => {
        return this.setState({ text: event.blocks[0].text })
    }
    changeFromActiveEvent = (column) => {
        let tempActive = this.state.activeColumn.map(item => item)
        let tempDisable = this.state.disableColumn.map(item => item)
        let index = tempActive.indexOf(column)

        tempDisable.push(column)
        tempActive.splice(index, 1)
        this.setState({
            disableColumn: tempDisable.map(item => item),
            activeColumn: tempActive.map(item => item)
        })

    }
    changeToActiveEvent = (column) => {
        let tempActive = this.state.activeColumn.map(item => item)
        let tempDisable = this.state.disableColumn.map(item => item)
        let index = tempDisable.indexOf(column)

        tempActive.push(column)
        tempDisable.splice(index, 1)
        this.setState({
            activeColumn: tempActive.map(item => item),
            disableColumn: tempDisable.map(item => item)
        })
    }
    changeDataSourceEvent = (event) => {
        this.setState({ targetSource: event.target.value})
        this.setState({disableColumn: event.target.value === 'Stocks' ?
            difference(Object.keys(this.props.stock[0]), []).map(item => item) :
            difference(Object.keys(this.props.contact[0]), []).map(item => item)})
        this.setState({activeColumn: []})
    }
    render() {
        if (this.state.mode === 'display')
        {
            return (
                <AddWidgetView
                    settingClick={ this.settingClickEvent }
                    dashboardMode={ this.props.dashboardMode }
                    layoutType={ this.props.layoutType }
                />
            )
        }

            return (
                <SettingNewWidgetView
                    cancelClick = { this.cancelClickEvent }
                    data = { this.props.data }
                    onTitleSettingChange = { this.onTitleSettingChangeEvent }
                    onSubmitSetting = { this.onSubmitSettingEvent }
                    changeFromActive = { this.changeFromActiveEvent }
                    changeToActive = { this.changeToActiveEvent }
                    changeDropdown = { this.changeDropdownEvent }
                    targetType = { this.state.targetType }
                    text = { this.state.text }
                    activeColumn = { this.state.activeColumn }
                    disableColumn = { this.state.disableColumn }
                    dataSource = { this.state.dataSource }
                    onTextSettingChange = { this.onTextSettingChangeEvent }
                    changeDataSource = { this.changeDataSourceEvent }
                    layoutType={ this.props.layoutType }
                />
            )
    }
}
