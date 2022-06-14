import React from 'react'
import {shallow} from 'enzyme'
import {App} from '../App'


it('should render Text', ()=> {
	const wrapper = shallow(<App />)
	const article = wrapper.find('div')
	expect(article).toBe('Text')
})

//const article = wrapper.find(Footer)
//expect(article.exists()).toBe(true)