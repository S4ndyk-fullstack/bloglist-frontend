import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

const blog = {
  title: 'Not a blog',
  author: 'George R.R Martin',
  likes: '6419'
}

test('renders info', () => {
  const component = render(<SimpleBlog blog={blog} />)
  const titleAndAuthor = component.container.querySelector('.titleAndAuthor')
  const likes = component.container.querySelector('.likes')
  expect(titleAndAuthor).toHaveTextContent(`${blog.title} ${blog.author}`)
  expect(likes).toHaveTextContent(`blog has ${blog.likes} likes`)
})

test('clicking twice fires func twice', () => {
  const mockfunc = jest.fn()
  const component = render(<SimpleBlog blog={blog} onClick={mockfunc} />)
  const button = component.container.querySelector('.likeButton')
  fireEvent.click(button)
  fireEvent.click(button)
  expect(mockfunc.mock.calls.length).toBe(2)
})