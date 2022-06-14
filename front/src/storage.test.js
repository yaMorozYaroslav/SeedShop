const add = (a, b) => a + b

describe('Arithmetic', ()=> {
	it('Adds two numbers correctly', ()=> {
		expect(add(10, 20)).toBe(30)
	})
	it('Returns NaN if no args passed', ()=> {
		expect(add()).toBeNaN()
	})
})