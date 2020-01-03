import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import sortBy from 'lodash/sortBy'
import Blog from './Blog'
import BlogFrom from './BlogForm'

const BlogList = ({ user, setUser, setMessage }) => {
  const [blogs, setBlogs] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    blogService.getAll()
      .then(data => setBlogs(sortBy(data, 'title')))
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
      {
        showForm ?
          <></>
          :
          <button type='button' onClick={() => setShowForm(true)}>add blog</button>
      }
      <button type='button' onClick={logout}>logout</button>
      <div className='blogs'>
        {blogs.map(blog => <Blog key={blog.id} blogs={blogs} setBlogs={setBlogs} blog={blog} user={user} />)}
      </div>
      {
        showForm ?
          <BlogFrom setMessage={setMessage} blogs={blogs} setBlogs={setBlogs} setShowForm={setShowForm} />
          :
          <></>
      }
    </div>
  )
}

export default BlogList