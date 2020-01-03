import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('clicking expands blog', () => {
  const blog = {
    title: 'Not a blog',
    author: 'George R.R Martin',
    url: 'notablog.com',
    likes: '1754',
    user: {
      username: 'Kalttis',
      name: 'Santtu'
    }
  }
  const user = {
    username: 'Kalttis',
    name: 'Santtu'
  }
  const component = render(<Blog blog={blog} setBlogs={jest.fn()} user={user} />)
  const clickableBlog = component.container.querySelector('div')
  expect(clickableBlog).toHaveTextContent(`${blog.title} ${blog.author}`)
  expect(clickableBlog).not.toHaveTextContent(`${blog.url}`)
  expect(clickableBlog).not.toHaveTextContent(`likes: ${blog.likes}`)
  fireEvent.click(clickableBlog)
  expect(clickableBlog).toHaveTextContent(`${blog.title} ${blog.author}`)
  expect(clickableBlog).toHaveTextContent(`${blog.url}`)
  expect(clickableBlog).toHaveTextContent(`likes: ${blog.likes}`)
  fireEvent.click(clickableBlog)
  expect(clickableBlog).toHaveTextContent(`${blog.title} ${blog.author}`)
  expect(clickableBlog).not.toHaveTextContent(`${blog.url}`)
  expect(clickableBlog).not.toHaveTextContent(`likes: ${blog.likes}`)


})