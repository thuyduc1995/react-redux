import React from 'react'
import {expect} from 'chai'
import {shallow, mount} from 'enzyme'
import thunk from 'redux-thunk'
import sinon from 'sinon'
import {DashboardView} from '../dashboard.view'
import configureStore from 'redux-mock-store'
import {Button} from 'react-bootstrap'

describe('test dashboard rendered', () => {
    const dashboard = {
        "userId": 1,
        "title": "My Default Dashboard",
        "layoutType": "1_COLUMN",
        "widgets": [
            {
                "id": 1,
                "title": "Text Widget",
                "widgetType": "TEXT_WIDGET",
                "maxWidth": 400,
                "maxHeight": 200,
                "configs": {"text": "Lorem Ipsum and typesetting industry."}
            }
        ]
    }
    let buttonEvent = null
    let middlewares = [thunk]
    let mockStore = configureStore(middlewares)

    beforeEach(() => {
        buttonEvent = {
            onButtonClick: sinon.spy()
        }
    })

    it('should render dashboard title ', () => {

        const wrapper = shallow(<DashboardView dashboard={dashboard}/>)
        const title = wrapper.find('h4')

        expect(title.text()).to.equal(dashboard.title)
    })
    it('should render 7 buttons ', () => {
        const wrapper = shallow(<DashboardView dashboard={dashboard}/>)
        const buttons = wrapper.find(Button)
        // const button = buttons.findWhere(n => n.text() === 'View')
        // console.log('Button: ', button)

        expect(buttons.length).to.equal(7)
    })
    it('should have button click event', () => {
        const wrapper = mount(<DashboardView dashboard = {dashboard} changeViewMode={buttonEvent.onButtonClick}/>)
        const buttons = wrapper.find('button').first()
        const store = mockStore({})

        buttons.simulate('click')
        expect(buttonEvent.onButtonClick.calledOnce).to.equal(true)
    })
})


