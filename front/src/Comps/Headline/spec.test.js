import React from 'react'
import {shallow} from 'enzyme'
import Headline from './index'

import {findByTestAtrr, checkProps} from '../../Tools/utils'

const setUp =(props={})=>{
	const component = shallow(<Headline {...props}/>)
	return component
}
describe('Headline Component', ()=> {
   describe('Checking PropTypes', ()=> {
      it('Should not throw a warning', ()=> {
         const expectedProps = {
            header: 'Test Header',
            desc: 'Test Desc',
            tempArr: [{
               fName: 'Test fName',
               lName: 'Test lName',
               email: 'test@email.com',
               age: 23,
               onlineStatus: false
            }]
         }
         const propsErr = checkProps(Headline, expectedProps)
         expect(propsErr).toBeUndefined()
      })
   })
})
describe('Headline Component', ()=>{
	
	})

describe('Have no props',()=>{
      
})