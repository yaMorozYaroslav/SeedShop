import React from 'react'
import {shallow} from 'enzyme'
import {App} from '../App'
import {Footer} from '../Comps/Footer'

it('should render Ticket and Footer', ()=> {
	const wrapper = shallow(<App />)
	const footer = wrapper.find(Footer)
	expect(footer.exists()).toBe(true)
})