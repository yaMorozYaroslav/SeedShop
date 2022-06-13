import React from 'react'
import {Footer} from './index'
import {shallow} from 'enzyme'

it('should render customer service phone number', ()=> {
	const wrapper = shallow(<Footer />)
	const span = wrapper.find('span')
	const result = span.text()

	expect(result).toBe('Customer Service: 1-800-555-444')
})