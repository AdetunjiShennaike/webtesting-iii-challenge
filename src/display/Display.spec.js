// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
// import '@testing-library/react/cleanup-after-each' <-- deprecated 

import Display from './Display'

describe('display component', () => {
  //check that things will be displayed properly based on the given boolean values
  it('displays open and green', () => {
    //pass a value to the variable that controls if the door is open or closed
    Display.defaultProps.closed = false
    //grab a render of the page
    const { getByText } = render(<Display />)
    //check the status of the text on the page
    const Open = getByText(/Open/)
    Open
    //grab the color from the page and check its status
    expect(Open.className).toMatch('led green-led')
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