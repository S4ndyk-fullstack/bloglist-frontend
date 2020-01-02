import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import Blog from './Blog'
import BlogFrom from './BlogForm'

const BlogList = ({ user, setUser, setMessage }) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll()
      .then(data => setBlogs(data))
      .catch(error => {
        console.log(error)
      })
  }, [])

  const logout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('appUser')
    setUser(null)
  }

  return (
    <div>
      <h2>blogs</h2>
      <p>{user.name} logged in</p>
      <button type='button' onClick={logout}>logout</button>
      {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
      <BlogFrom setMessage={setMessage} blogs={blogs} setBlogs={setBlogs} />
    </div>
  )
}

export default BlogList