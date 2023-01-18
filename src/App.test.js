import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {App} from './App'

test('renders header', ()=>{
	  render(<App />)
	  const headerElement = screen.getByText(/header/i)
	  expect(headerElement).toBeInTheDocument()
	})
test('renders 3 items', ()=>{
	  render(<App />)
	  const listElements = screen.getAllByRole('listitem')
	  expect(listElements.length).toEqual(3)
	})
test('The sum is 10', ()=>{
	render(<App />)
	const sum = screen.getByTitle('sum')
	expect(sum.textContent).toBe('10')
	
	})
