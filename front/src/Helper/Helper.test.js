import {multiply, makeUpperCase} from './Helper'

test('multiply', ()=> {
	expect(multiply(2,10)).toBe(20)
})

test('lowerCase', ()=>{
	expect(makeUpperCase('yaro')).toBe('YARO')
})