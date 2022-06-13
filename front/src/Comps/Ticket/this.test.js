import React from 'react'
import {shallow} from 'enzyme'
import {Ticket} from '../Ticket'

it('should increment total when clicking button', ()=> {
	const wrapper = shallow(<Ticket />)
	const total1 = wrapper.find('h2.count').text()
	expect(total1).toBe('0')
})