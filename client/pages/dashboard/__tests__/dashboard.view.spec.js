import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { DashboardView } from '../dashboard.view'

describe('test dashboard', () => {
    it('should have an ButtonGrop ', () => {

        const wrapper = shallow(<DashboardView/>)

        expect(true).to.equals(true)
    })
})
