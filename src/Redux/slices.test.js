import {renderWithProviders} from './test-util'
import {fireEvent, screen} from '@testing-library/react'
import {Element} from '../comps/Element/Element'
import '@testing-library/jest-dom'
import {setupStore} from './store'
import {onClick} from './firstSlice'


test('State changes after click', () => {
	const initialState = {click:false, change:0}
	//const store = setupStore()
	//store.dispatch(onClick())
	//const actual = store.getState().first
	
	//const {getByText} = renderWithProviders(<Element/>,{store})
	const {getByText} = renderWithProviders(<Element/>, {
		preloadedState: {
			first: initialState
			}
		})
	expect(screen.getByText(/0/i)).toBeInTheDocument()
	//expect(actual).toEqual(initialState)
	})
