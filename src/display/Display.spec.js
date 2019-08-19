// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'

import Display from './Display'

describe('display component', () => {
  it('displays open and green', () => {
    Display.defaultProps.closed = false
    const led = Display.closedClass
    console.log(led)
  
    const { getByText } = render(<Display />)

    getByText(/Open/)
  })
  it('displays closed and red', () => {
    Display.defaultProps.closed = true
    const { getByText } = render(<Display />)

    getByText(/Closed/)
  })
  it('displays locked and red', () => {
    Display.defaultProps.locked = true
    const { getByText } = render(<Display />)

    getByText(/Locked/)
  })
  it('displays unlocked and green', () => {
    Display.defaultProps.locked = false
    const { getByText } = render(<Display />)

    getByText(/Unlocked/)
  })
})