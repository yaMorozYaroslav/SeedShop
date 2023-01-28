import '@testing-library/jest-dom'
import {fireEvent, screen} from '@testing-library/react'
import {renderWithProviders} from '../../Redux/test-util'
import {Element} from './Element'

test('number changes after click', () => {
	renderWithProviders(<Element/>)
	expect(screen.getByText(/0/i)).toBeInTheDocument()
	})
