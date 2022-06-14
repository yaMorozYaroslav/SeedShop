import React from 'react'
import {mount} from 'enzyme'
import {useDispatch, Provider} from 'react-redux'
import {App} from '../App'

jest.mock('react-redux', () => {
	const {Provider, useSelector} = jest.requireActual('react-redux')

	return {
		useDispatch: jest.fn(),
		useSelector,
		Provider
	}
})
it('should render App with Provider', ()=> {
	const wrapper = mount(<Provider><App/></Provider>)
	const globalStore = wrapper.find(Provider).prop('store')
})

//const article = wrapper.find(Footer)
//expect(article.exists()).toBe(true)
/*it('should render Text', ()=> {

	const wrapper = shallow(<App />)
	const article = wrapper.find('div')
	expect(article).toBe('Text')
})*/
