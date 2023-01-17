import moxios from 'moxios'
import {mockStore} from './Redux/tools/mockStore'
import {getElvs} from './Redux/actions/elvAct'

describe('getElvs action', ()=> {
	beforeEach(()=> {
		moxios.install()
	})
	afterEach(()=> {
		moxios.uninstall()
	})
	test('Store is updated correctly', ()=> {
		const expectedState = {title: 'Example title 1'}
		const store = mockStore()

		moxios.wait(()=> {
			const request = moxios.requests.mostRecent()
			request.respondWith({
				status: 200,
				response: expectedState
			})
		})
		return store.dispatch(getElvs()).then(()=> {
			const newState = store.getState()
			console.log(newState)
			expect(newState.elvs).toBe(expectedState)
		})
	})
})