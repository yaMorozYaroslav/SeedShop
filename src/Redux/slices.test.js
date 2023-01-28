import {renderWithProviders} from './test-util'
import {fireEvent, screen} from '@testing-library/react'
import {Element} from '../comps/Element/Element'
import '@testing-library/jest-dom'

test('Uses preloaded statate to render', () => {
	const initialState = [{click:true, change:1}]
	const {getByText} = renderWithProviders(<Element/>,{preloadedState: {first: initialState}})
	expect(screen.getByText(/1/i)).toBeInTheDocument()
	})
