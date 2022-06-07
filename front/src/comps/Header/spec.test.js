import React from 'react'
import {shallow} from 'enzyme'
import {Header} from './index'
import {findByTestAtrr} from '../../utils'
const setUp =(props={})=>{
	const component = shallow(<Header {...props}/>)
	return component
}

describe('Header Component', ()=>{

	  let component
	  beforeEach(()=>{
	  	component = setUp()
	  })
		it('It should render without errors', ()=>{
			//console.log(component.debug())
			const wrapper = findByTestAtrr(component, 'headerComponent')
			expect(wrapper.length).toBe(1)
		})
		it('Should render a logo', ()=>{
			const logo = findByTestAtrr(component, 'logoIMG')
			expect(logo.length).toBe(1)
		})
      })