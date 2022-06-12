import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {render, fireEvent} from '@testing-library/react'
import {App} from '../App'

Enzyme.configure({adapter: new Adapter()})

it('renders correctly', ()=> {
	const {queryByTestId} = render(<App/>)
	expect(queryByTestId('Paragraph')).toBeTruthy()
})

