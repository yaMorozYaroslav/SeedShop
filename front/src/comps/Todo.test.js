import {render, screen, cleanup} from '@testing-library/react'
import {Todo} from './Todo'
import {toBeInTheDocument} from '@testing-library/jest-dom'

test('should render non-completed todo component',()=>{
	const todo = {id:1, title: 'wash dishes', completed: false}
	render(<Todo todo={todo}/>)
	const todoElement = screen.getByTestId('todo-1')
	expect(todoElement).toBeInTheDocument()
	expect(todoElement).toHaveTextContent('wash')
})
