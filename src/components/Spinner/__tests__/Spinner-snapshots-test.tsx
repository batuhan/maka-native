import React from 'react'
import renderer from 'react-test-renderer'
import { Text } from 'react-native'
import Spinner from '../Spinner'

describe('Spinner', () => {
  it('renders correctly', () => {
    const instance = renderer.create(
      <Spinner>
        <Text>Loading...</Text>
      </Spinner>,
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })
})
