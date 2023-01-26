import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {renderWithProviders} from './Redux/test-util'
import {App} from './App'

test('renders header', ()=>{
	  renderWithProviders(<App />)
	  const headerElement = screen.getByText(/header/i)
	  expect(headerElement).toBeInTheDocument()
	})
test('renders 3 items', ()=>{
	  renderWithProviders(<App />)
	  const listElements = screen.getAllByRole('listitem')
	  expect(listElements.length).toEqual(3)
	})
	
