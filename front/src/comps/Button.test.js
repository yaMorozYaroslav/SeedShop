import Button from './Button'

it('checkButtonRender', ()=>{
	const {queryByTitle} = render(<Button />)
	const btn = queryByTitle('dummyButton')
	expect(btn).toBeTruthy()
})