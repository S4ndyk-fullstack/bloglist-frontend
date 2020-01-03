import React from 'react'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  test('if no user logged, notes are not rendered', async () => {
    const component = render(
      <App />
    )
    component.rerender(<App />)
    await waitForElement(() => component.getByText('login'))
    // expectations here
    const login = component.container.querySelector('.login')
    expect(login).toBeDefined()
    expect(login).toHaveTextContent('username: password:')
  })

  test('if logged, show blogs', async () => {
    const user = {
      username: 'tester',
      token: '1231231214',
      name: 'Donald Tester'
    }
    localStorage.setItem('appUser', JSON.stringify(user))
    const component = render(
      <App />
    )
    component.rerender(<App />)
    const blogs = await waitForElement(() => component.container.querySelector('.blogs'))
    expect(blogs).toHaveTextContent('Not a blog George R.R Martin')
    expect(blogs).toHaveTextContent('Bloggo Doggo')
  })
})