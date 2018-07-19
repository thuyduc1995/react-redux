import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { NavbarView } from '../navbar.view'


describe('Test', () => {
    it('NavbarView', () => {

        const wrapper = shallow(<NavbarView/>)

        expect(true).to.equals(true)
    })
})
