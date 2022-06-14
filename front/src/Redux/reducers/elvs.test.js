import * as type from '../tools/consts'
import elvRed from './elvRed'

describe('Posts Reducer', ()=> {
	it('Should return default state', ()=> {
		const newState = elvRed(undefined, {})
		expect(newState).toEqual([])
	})
	it('Should retunr new state if receiving type', ()=> {
		const elv = {elv1: 'elv1'}
		const newState = elvRed(undefined, {
			type: type.FETCH_ELVS,
			payload: elv
		})
		expect(newState).toEqual(elv)
	})
})