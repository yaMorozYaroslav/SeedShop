//import React from 'react'
//import {shallow} from 'enzyme'
//import {useDispatch, Provider} from 'react-redux'
//import {App} from '../App'
const add = (a, b) => a + b

describe('Arithmetic', ()=> {
	it('Adds two numbers correctly', ()=> {
		expect(add(10, 20)).toBe(30)
	})
	it('Returns NaN if no args passed', ()=> {
		expect(add()).toBeNaN()
	})
})


/*
const article = wrapper.find(Footer)
expect(article.exists()).toBe(true)

it('should render Text', ()=> {
	const wrapper = shallow(<App />)
	const article = wrapper.find('div')
	expect(article).toBe('Text')
})*/