import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '@testing-library/react'
import {Login} from './Login'

test('username input should be rendered', () => {
	render(<Login/>);
	const userInputEl = screen.getByPlaceholderText(/username/i)
	expect(userInputEl).toBeInTheDocument()
	})

test('password input should be rendered', () => {
	render(<Login/>)
	const passwordInputEl = screen.getByPlaceholderText(/password/i)
	expect(passwordInputEl).toBeInTheDocument()
	})
test('button input should be rendered', () => {
	render(<Login/>)
	const buttonInputEl = screen.getByRole('button')
    expect(buttonInputEl).toBeInTheDocument()
	})
test('input should be empty', () => {
	render(<Login/>)
	const userInputEl = screen.getByPlaceholderText(/username/i)
    expect(userInputEl.value).toBe('')
	})
test('button should be disabled', () => {
	render(<Login />)
	const buttonEl = screen.getByRole('button')
	expect(buttonEl).toBeDisabled()
	})
test('error message should not be visible', () => {
	render(<Login/>)
	const errorEl = screen.getByTestId('error')
	expect(errorEl).not.toBeVisible()
	})
test('username input should change', () => {
	  render(<Login/>)
	  const userInputEl = screen.getByPlaceholderText(/username/i)
	  const testValue = 'text'
	  
	  fireEvent.change(userInputEl, {target:{value:testValue}})
	  expect(userInputEl.value).toBe(testValue)
	})
test('password input should change', () => {
	render(<Login/>)
	const passInputEl = screen.getByPlaceholderText(/password/i)
	const testValue = 'test'
	
	fireEvent.change(passInputEl, {target: {value:testValue}})
	expect(passInputEl.value).toBe(testValue)
	})
test('button should not be disabled when inputs exist', () => {
	render(<Login />)
	const buttonEl = screen.getByRole('button')
	const userInputEl = screen.getByPlaceholderText(/username/i)
	const passInputEl = screen.getByPlaceholderText(/password/i)
	
	const testValue = 'test'
	
	fireEvent.change(userInputEl, {target: {value:testValue}})
	fireEvent.change(passInputEl, {target: {value: testValue}})
	
	expect(buttonEl).not.toBeDisabled()
})	
