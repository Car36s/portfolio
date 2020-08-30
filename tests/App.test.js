import '@testing-library/jest-dom/extend-expect'

// TODO: jest.config.js setupFiles, svg, nothing really works (comment out ^, or run tests with svg components)
import { render, screen } from '@testing-library/react'
import React from 'react'

import App from '../src/App'

test('renders learn react link', () => {
    render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
