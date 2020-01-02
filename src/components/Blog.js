import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog, setBlogs, blogs, user }) => {
  console.log(blog)
  const [expanded, setExpanded] = useState(false)
  const like = (event) => {
    event.stopPropagation()
    event.preventDefault()
  }

  const remove = async (event) => {
    event.stopPropagation()
    event.preventDefault()
    try {
      if (window.confirm(`Are you sure you want to delete ${blog.title} by ${blog.author}`)) {
        await blogService.remove(blog.id)
        setBlogs(blogs.filter(item => item.id !== blog.id))
      }
    } catch (exception) {
      console.log(exception) 
    }
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const full = (
    <div>
      <div>{blog.title} {blog.author}</div>
      <div>{blog.url}</div>
      <div>
        likes: {blog.likes}
        <button type='button' onClick={like}>like</button>
      </div>
      <div>added by: {blog.user.name}</div>
      {
        blog.user.toString() === user.toString() ?
          <button type='button' onClick={remove}>delete</button>
          :
          <></>
      }
    </div>
  )

  const minimal = (
    <div>
      {blog.title} {blog.author}
    </div>
  )

  return (
    <div onClick={() => setExpanded(!expanded)} style={blogStyle}>
      {
        expanded ?
          full
          :
          minimal
      }
    </div>
  )
}

export default Blog