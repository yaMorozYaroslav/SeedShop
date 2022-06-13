import React from 'react'
import {shallow} from 'enzyme'
import {Ticket} from '../Ticket'

it('should increment total when clicking button', ()=> {
	const wrapper = shallow(<Ticket />)
	const total1 = wrapper.find('h2.count').text()
	expect(total1).toBe('0')

	const button = wrapper.find('button')
	button.simulate('click')

	const total2 = wrapper.find('h2.count').text()
	expect(total2).toBe('1')
})
it('should render ticket name in title', ()=> {
	const wrapper = shallow(<Ticket name={'NHL Tickets'}/>)
	const title = wrapper.find('h2.name').text()

	expect(title).toBe('NHL Tickets')
})