import Vue from 'vue'
import HelloWorld from '../../src/components/SharedComponents/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const { getByText } = render(HelloWorld)
    getByText('Count: 0')
  })
})
