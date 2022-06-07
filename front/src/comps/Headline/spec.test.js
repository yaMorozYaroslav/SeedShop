import React from 'react'
import {shallow} from 'enzyme'
import Headline from './index'

import {findByTestAtrr} from '../../utils'
const setUp =(props={})=>{
	const component = shallow(<Headline {...props}/>)
	return component
}

describe('Headline Component', ()=>{
	describe('Have props', ()=>{
	  let wrapper
      beforeEach(()=>{
      	const props = {
      		header: 'Test Header',
      		desc: 'Test Desc'
      	}
      	wrapper = setUp(props)
      })
	})

describe('Have no props',()=>{
      let wrapper
      beforeEach(()=>{
      	wrapper = setUp()
      })
	})
})