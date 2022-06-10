import React from 'react'
import {findByTestAtrr, checkProps} from '../../Tools/utils'
import SharedButton from './index'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()})

describe('SharedButton Component', ()=> {
	describe('Checking PropTypes', ()=> {
		it('Should not throw a warning', ()=> {
			const expectedProps = {
				buttonText: 'Example Button Text',
				emitEvent: ()=> {

				}
			}
			const propsError = checkProps(SharedButton, expectedProps)
			expect(propsError).toBeUndefined()
		})
	})

	describe('Renders', ()=> {
		let wrapper
		beforeEach(()=> {
			const props = {
				buttonText: 'Examle Button Text',
				emitEvent: ()=> {

				}
			}
			wrapper = shallow(<SharedButton {...props}/>)
		})
		it('Should Render a button', ()=> {
			const button = findByTestAtrr(wrapper, 'buttonComponent')
			expect(button.length).toBe(1)
		})
	})
})