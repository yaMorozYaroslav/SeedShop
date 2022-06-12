import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {SearchBox} from './index'

it('renders correctly', ()=> {
	const {queryByTestId, queryByPlaceholderName} = render(<SearchBox />)
	expect(queryByTestId('search-button')).toBeTruthy()
})