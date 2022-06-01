import {Button} from './Button'
import {render, screen, cleanup} from '@testing-library/react'

it('checkButtonRender', ()=>{
	const {queryByTitle} = render(<Button />)
	const btn = queryByTitle('dummyButton')
	expect(btn).toBeTruthy()
})
describe('clickButton', ()=>{
 it('onClick',()=>{
	    const {queryByTitle} = render(<Button />)
		const btn = queryByTitle('dummyButton')
		expect(btn.innerHTML).toBe('Press Here')
		fireEvent.click(btn)
		expect(btn.innerHTML).toBe('You clicked.')
		})
     })