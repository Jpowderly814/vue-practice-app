import { render } from '@testing-library/vue'
import HelloWorld from '../components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const { getByText } = render(HelloWorld)
    getByText('Hello World')
  })
})
